import * as stylex from '@stylexjs/stylex';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, ViewTransition } from 'react';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';
import { serializeJsonLd, SITE_NAME, SITE_URL } from '~/app/site';
import { BlogFrame } from '~/components/blog/frame';
import { PostBody } from '~/components/blog/post-body';
import { DirectionalTransition, postTitleName } from '~/components/directional-transition';
import { formatPostDate, getLocalPosts, getPost } from '~/lib/blog';

export const generateStaticParams = async () => {
  const posts = await getLocalPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async (props: PageProps<'/blog/[slug]'>): Promise<Metadata> => {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (post === null || post.external !== null) {
    notFound();
  }

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [SITE_NAME],
    },
  };
};

const BlogPost = async ({ params }: PageProps<'/blog/[slug]'>) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (post === null || post.external !== null) {
    notFound();
  }

  return (
    <>
      <ViewTransition default="none" enter="slide-up" key={slug} name="post-article" share="auto">
        <article>
          <ViewTransition default="none" name={postTitleName(post.slug)} share="text-morph">
            <h1 {...stylex.props(styles.title)}>{post.title}</h1>
          </ViewTransition>
          <time dateTime={post.date} {...stylex.props(styles.date)}>
            {formatPostDate(post.date)}
          </time>
          <div {...stylex.props(styles.body)}>
            <PostBody source={post.body} />
          </div>
        </article>
      </ViewTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
            url: `${SITE_URL}/blog/${post.slug}`,
          }),
        }}
      />
    </>
  );
};

const BlogPostPage = (props: PageProps<'/blog/[slug]'>) => {
  return (
    <DirectionalTransition>
      <BlogFrame backHref="/blog" backLabel="Blog">
        <Suspense fallback={<div {...stylex.props(styles.fallback)} />}>
          <BlogPost {...props} />
        </Suspense>
      </BlogFrame>
    </DirectionalTransition>
  );
};

const styles = stylex.create({
  title: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '-0.025em',
    lineHeight: 1.3,
  },
  date: {
    color: color.textMuted,
    display: 'block',
    fontSize: text.sm,
    marginTop: spacing.sm,
  },
  body: {
    marginTop: spacing.xl,
  },
  fallback: {
    minHeight: 240,
  },
});

export default BlogPostPage;
