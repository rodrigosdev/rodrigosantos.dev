import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';
import { formatIndexDate, type Post } from '~/lib/blog';
import { utils } from '~/styles/utils';

const Arrow = () => (
  <svg
    aria-hidden
    fill="none"
    height={12}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 12 12"
    width={12}
    {...stylex.props(styles.arrow)}
  >
    <path d="M3.5 2.5h6v6" />
    <path d="M9.5 2.5 2.5 9.5" />
  </svg>
);

const PostRow = ({ post, showYear }: { post: Post; showYear: boolean }) => {
  const year = post.date.slice(0, 4);
  const date = formatIndexDate(post.date);
  const title = (
    <span {...stylex.props(styles.title)}>
      {post.title}
      {post.external === null ? null : <Arrow />}
    </span>
  );
  const time = (
    <time dateTime={post.date} {...stylex.props(styles.date)}>
      {date}
    </time>
  );

  if (post.external === null) {
    return (
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.year)}>{showYear ? year : null}</span>
        <Link href={`/blog/${post.slug}`} {...stylex.props(styles.link, utils.focusText)}>
          {title}
          {time}
        </Link>
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.row)}>
      <span {...stylex.props(styles.year)}>{showYear ? year : null}</span>
      <a
        href={post.external}
        rel="noopener noreferrer"
        target="_blank"
        {...stylex.props(styles.link, utils.focusText)}
      >
        {title}
        {time}
      </a>
    </div>
  );
};

const PostList = ({ posts }: { posts: readonly Post[] }) => {
  if (posts.length === 0) {
    return <p {...stylex.props(styles.empty)}>Nothing here yet.</p>;
  }

  return (
    <div {...stylex.props(styles.list)}>
      {posts.map((post, index) => {
        const previous = posts[index - 1];
        const showYear =
          previous === undefined || previous.date.slice(0, 4) !== post.date.slice(0, 4);

        return <PostRow key={post.slug} post={post} showYear={showYear} />;
      })}
    </div>
  );
};

const styles = stylex.create({
  list: {
    color: color.textMuted,
    display: 'flex',
    flexDirection: 'column',
    fontSize: text.sm,
    marginTop: spacing.md,
  },
  row: {
    gap: spacing.sm,
    alignItems: 'baseline',
    display: 'flex',
  },
  year: {
    color: color.textMuted,
    flexShrink: 0,
    fontSize: text.sm,
    width: '3rem',
  },
  link: {
    gap: spacing.md,
    textDecoration: 'none',
    alignItems: 'baseline',
    color: color.text,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    opacity: {
      default: 1,
      ':hover': {
        default: null,
        '@media (hover: hover)': 0.7,
      },
    },
    transitionDuration: '150ms',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    minWidth: 0,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: text.md,
    fontWeight: 400,
  },
  date: {
    color: color.textMuted,
    flexShrink: 0,
    fontSize: text.sm,
  },
  arrow: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: 4,
  },
  empty: {
    color: color.textMuted,
    marginTop: spacing.md,
  },
});

export { PostList };
