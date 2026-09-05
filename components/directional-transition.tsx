/// <reference types="react/canary" />

import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { ViewTransition } from 'react';

type DirectionalTransitionProps = {
  children: ReactNode;
};

const directional = {
  default: 'none',
  'nav-back': 'nav-back',
  'nav-forward': 'nav-forward',
} as const;

const DirectionalTransition = ({ children }: DirectionalTransitionProps) => {
  return (
    <ViewTransition default="none" enter={directional} exit={directional}>
      <div {...stylex.props(styles.host)}>{children}</div>
    </ViewTransition>
  );
};

const postTitleName = (slug: string): string => `post-title-${slug}`;

const styles = stylex.create({
  host: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

export { DirectionalTransition, postTitleName };
