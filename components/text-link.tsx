import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

import { utils } from '~/styles/utils';

type TextLinkProps = {
  external?: boolean;
  href: string;
  style?: StyleXStyles;
  title: string;
};

const TextLink = ({ external, href, style, title }: TextLinkProps) => {
  const linkProps = stylex.props(utils.link, utils.focusText, style);

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...linkProps}>
        {title}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {title}
    </Link>
  );
};

export { TextLink };
