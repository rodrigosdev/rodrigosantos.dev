import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { cacheLife } from 'next/cache';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type FrontmatterFields = {
  date: string | null;
  description: string | null;
  external: string | null;
  title: string | null;
};

export type Post = {
  body: string;
  date: string;
  description: string;
  external: string | null;
  slug: string;
  title: string;
};

const unquote = (value: string): string => {
  if (value.length < 2) {
    return value;
  }

  const start = value[0];
  const end = value[value.length - 1];
  if ((start === '"' && end === '"') || (start === "'" && end === "'")) {
    return value.slice(1, -1);
  }

  return value;
};

const parseFields = (block: string, slug: string): FrontmatterFields => {
  let date: string | null = null;
  let description: string | null = null;
  let external: string | null = null;
  let title: string | null = null;

  for (const line of block.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '') {
      continue;
    }

    const separator = trimmed.indexOf(':');
    if (separator === -1) {
      throw new Error(`Invalid frontmatter in ${slug}: ${trimmed}`);
    }

    const key = trimmed.slice(0, separator).trim();
    const value = unquote(trimmed.slice(separator + 1).trim());

    if (key === 'date') {
      date = value;
    } else if (key === 'description') {
      description = value;
    } else if (key === 'external') {
      external = value;
    } else if (key === 'title') {
      title = value;
    } else {
      throw new Error(`Unknown frontmatter key "${key}" in ${slug}`);
    }
  }

  return { date, description, external, title };
};

const parsePost = (slug: string, source: string): Post => {
  const match = FRONTMATTER_PATTERN.exec(source);
  if (match === null) {
    throw new Error(`Post ${slug} is missing YAML frontmatter`);
  }

  const block = match[1];
  const body = match[2];
  if (block === undefined || body === undefined) {
    throw new Error(`Post ${slug} is missing YAML frontmatter`);
  }

  const fields = parseFields(block, slug);
  if (fields.title === null || fields.title === '') {
    throw new Error(`Post ${slug} is missing a title`);
  }
  if (fields.date === null || !DATE_PATTERN.test(fields.date)) {
    throw new Error(`Post ${slug} needs a date in YYYY-MM-DD form`);
  }
  if (fields.description === null || fields.description === '') {
    throw new Error(`Post ${slug} is missing a description`);
  }
  if (fields.external !== null && fields.external === '') {
    throw new Error(`Post ${slug} has an empty external URL`);
  }

  return {
    body: body.trim(),
    date: fields.date,
    description: fields.description,
    external: fields.external,
    slug,
    title: fields.title,
  };
};

const loadPosts = async (): Promise<Post[]> => {
  const names = await readdir(BLOG_DIR);
  const posts = await Promise.all(
    names
      .filter((name) => name.endsWith('.mdx'))
      .map(async (name) => {
        const slug = name.slice(0, -4);
        if (!SLUG_PATTERN.test(slug)) {
          throw new Error(`Invalid blog slug: ${slug}`);
        }

        const source = await readFile(path.join(BLOG_DIR, name), 'utf8');
        return parsePost(slug, source);
      }),
  );

  posts.sort((left, right) => {
    if (left.date === right.date) {
      return left.slug < right.slug ? 1 : -1;
    }
    return left.date < right.date ? 1 : -1;
  });

  return posts;
};

export const getPosts = async (): Promise<readonly Post[]> => {
  'use cache';
  cacheLife('max');
  return loadPosts();
};

export const getLocalPosts = async (): Promise<readonly Post[]> => {
  const posts = await getPosts();
  return posts.filter((post) => post.external === null);
};

export const getPost = async (slug: string): Promise<Post | null> => {
  if (!SLUG_PATTERN.test(slug)) {
    return null;
  }

  const posts = await getPosts();
  for (const post of posts) {
    if (post.slug === slug) {
      return post;
    }
  }

  return null;
};

const toUtcDate = (isoDate: string): Date => new Date(`${isoDate}T00:00:00.000Z`);

const indexDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
});

const postDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

export const formatIndexDate = (isoDate: string): string => {
  return indexDateFormatter.format(toUtcDate(isoDate));
};

export const formatPostDate = (isoDate: string): string => {
  return postDateFormatter.format(toUtcDate(isoDate));
};
