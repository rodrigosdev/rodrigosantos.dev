import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import type { ElementType } from 'react';

import { Slot } from '~/components/slot';
import { utils } from '~/styles/utils';

interface TextLinkProps {
  as?: ElementType;
  external?: boolean;
  href?: string;
  onClick?: () => void;
  style?: StyleXStyles;
  title: string;
}

const TextLink = ({ as = Link, external, href, onClick, style, title }: TextLinkProps) => {
  return (
    <Slot
      as={external ? 'a' : as}
      href={href}
      onClick={onClick}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...stylex.props(styles.root, utils.focusText, style)}
    >
      {title}
    </Slot>
  );
};

const styles = stylex.create({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textDecorationColor: {
      default: 'color-mix(in oklab, currentColor 30%, transparent)',
      ':hover': {
        default: null,
        '@media (hover: hover)': 'color-mix(in oklab, currentColor 70%, transparent)',
      },
    },
    textDecorationLine: 'underline',
    textUnderlineOffset: 1.4,
    transitionDuration: '150ms',
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export { TextLink };
