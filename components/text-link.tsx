import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

import { utils } from '~/styles/utils';

type TextLinkProps = {
  external?: boolean;
  href: string;
  style?: StyleXStyles;
  title: string;
  transitionTypes?: readonly string[];
};

const TextLink = ({ external, href, style, title, transitionTypes }: TextLinkProps) => {
  const linkProps = stylex.props(utils.link, utils.focusText, style);

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...linkProps}>
        {title}
      </a>
    );
  }

  if (transitionTypes === undefined) {
    return (
      <Link href={href} {...linkProps}>
        {title}
      </Link>
    );
  }

  return (
    <Link href={href} transitionTypes={[...transitionTypes]} {...linkProps}>
      {title}
    </Link>
  );
};

export { TextLink };
