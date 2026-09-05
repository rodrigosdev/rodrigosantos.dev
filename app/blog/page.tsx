import * as stylex from '@stylexjs/stylex';
import type { Metadata } from 'next';

import { color, tokens } from '~/app/global-tokens.stylex';
import { BlogFrame } from '~/components/blog/frame';
import { PostList } from '~/components/blog/post-list';
import { DirectionalTransition } from '~/components/directional-transition';
import { getPosts } from '~/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Experiments across software, security and AI by Rodrigo Santos.',
  alternates: { canonical: '/blog' },
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <DirectionalTransition>
      <BlogFrame backHref="/" backLabel="Home">
        <h1 {...stylex.props(styles.title)}>Blog</h1>
        <PostList posts={posts} />
      </BlogFrame>
    </DirectionalTransition>
  );
};

const styles = stylex.create({
  title: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '-0.025em',
    lineHeight: 1.75,
  },
});

export default BlogPage;
