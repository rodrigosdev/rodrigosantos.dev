import { compileMDX } from 'next-mdx-remote/rsc';
import { cacheLife } from 'next/cache';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from '~/components/blog/mdx';

type PostBodyProps = {
  source: string;
};

const PostBody = async ({ source }: PostBodyProps) => {
  'use cache';
  cacheLife('max');

  const { content } = await compileMDX({
    components: mdxComponents,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
    source,
  });

  return content;
};

export { PostBody };
