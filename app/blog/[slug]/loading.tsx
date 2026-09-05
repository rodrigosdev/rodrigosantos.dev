import * as stylex from '@stylexjs/stylex';

import { BlogFrame } from '~/components/blog/frame';

const BlogPostLoading = () => (
  <BlogFrame backHref="/blog" backLabel="Blog">
    <div {...stylex.props(styles.fallback)} />
  </BlogFrame>
);

const styles = stylex.create({
  fallback: {
    minHeight: 240,
  },
});

export default BlogPostLoading;
