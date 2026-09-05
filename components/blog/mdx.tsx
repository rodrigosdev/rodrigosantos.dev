import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';
import { CodeBlock } from '~/components/blog/code-block';
import { highlightCode } from '~/lib/highlight';
import { utils } from '~/styles/utils';

type MdxChildrenProps = {
  children?: ReactNode;
};

type MdxCodeProps = {
  children?: string;
  className?: string;
};

type MdxLinkProps = {
  children?: ReactNode;
  href?: string;
};

type MdxClassChildrenProps = {
  children?: ReactNode;
  className?: string;
};

type MdxInputProps = {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
};

type MdxTableCellProps = {
  children?: ReactNode;
};

const fenceLanguage = (className: string | undefined): string => {
  if (className === undefined) {
    return 'plaintext';
  }

  const marker = 'language-';
  const index = className.indexOf(marker);
  if (index === -1) {
    return 'plaintext';
  }

  const after = className.slice(index + marker.length);
  const space = after.indexOf(' ');
  return space === -1 ? after : after.slice(0, space);
};

const MdxParagraph = ({ children }: MdxChildrenProps) => (
  <p {...stylex.props(styles.paragraph)}>{children}</p>
);

const MdxH2 = ({ children }: MdxChildrenProps) => <h2 {...stylex.props(styles.h2)}>{children}</h2>;

const MdxH3 = ({ children }: MdxChildrenProps) => <h3 {...stylex.props(styles.h3)}>{children}</h3>;

const MdxH4 = ({ children }: MdxChildrenProps) => <h4 {...stylex.props(styles.h4)}>{children}</h4>;

const MdxStrong = ({ children }: MdxChildrenProps) => (
  <strong {...stylex.props(styles.strong)}>{children}</strong>
);

const MdxEmphasis = ({ children }: MdxChildrenProps) => (
  <em {...stylex.props(styles.emphasis)}>{children}</em>
);

const MdxStrike = ({ children }: MdxChildrenProps) => (
  <del {...stylex.props(styles.strike)}>{children}</del>
);

const hasClass = (className: string | undefined, token: string): boolean => {
  if (className === undefined) {
    return false;
  }

  return className.split(' ').includes(token);
};

const MdxList = ({ children, className }: MdxClassChildrenProps) => (
  <ul {...stylex.props(styles.list, hasClass(className, 'contains-task-list') && styles.taskList)}>
    {children}
  </ul>
);

const MdxOrderedList = ({ children }: MdxChildrenProps) => (
  <ol {...stylex.props(styles.list, styles.ordered)}>{children}</ol>
);

const MdxItem = ({ children, className }: MdxClassChildrenProps) => (
  <li {...stylex.props(styles.item, hasClass(className, 'task-list-item') && styles.taskItem)}>
    {children}
  </li>
);

const MdxInput = ({ checked, disabled, type }: MdxInputProps) => {
  if (type !== 'checkbox') {
    return null;
  }

  return (
    <input
      defaultChecked={checked === true}
      disabled={disabled === true}
      readOnly
      type="checkbox"
      {...stylex.props(styles.checkbox)}
    />
  );
};

const MdxQuote = ({ children }: MdxChildrenProps) => (
  <blockquote {...stylex.props(styles.quote)}>{children}</blockquote>
);

const MdxRule = () => <hr {...stylex.props(styles.rule)} />;

const MdxLink = ({ children, href }: MdxLinkProps) => {
  if (href === undefined) {
    return <span>{children}</span>;
  }

  const external = href.startsWith('https://') || href.startsWith('http://');
  if (external) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...stylex.props(utils.link, utils.focusText)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...stylex.props(utils.link, utils.focusText)}>
      {children}
    </Link>
  );
};

const MdxCode = async ({ children, className }: MdxCodeProps) => {
  const source = (children ?? '').replace(/\n$/, '');
  const isBlock = className !== undefined || source.includes('\n');

  if (!isBlock) {
    return <code {...stylex.props(styles.inline)}>{children}</code>;
  }

  const html = await highlightCode(source, fenceLanguage(className));

  return <CodeBlock html={html} source={source} />;
};

const MdxPre = ({ children }: MdxChildrenProps) => children ?? null;

const MdxTable = ({ children }: MdxChildrenProps) => (
  <div {...stylex.props(styles.tableWrap)}>
    <table {...stylex.props(styles.table)}>{children}</table>
  </div>
);

const MdxTableHead = ({ children }: MdxChildrenProps) => (
  <thead {...stylex.props(styles.thead)}>{children}</thead>
);

const MdxRow = ({ children }: MdxChildrenProps) => <tr>{children}</tr>;

const MdxHeaderCell = ({ children }: MdxTableCellProps) => (
  <th {...stylex.props(styles.th)}>{children}</th>
);

const MdxCell = ({ children }: MdxTableCellProps) => (
  <td {...stylex.props(styles.td)}>{children}</td>
);

const mdxComponents = {
  a: MdxLink,
  blockquote: MdxQuote,
  code: MdxCode,
  del: MdxStrike,
  em: MdxEmphasis,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  hr: MdxRule,
  input: MdxInput,
  li: MdxItem,
  ol: MdxOrderedList,
  p: MdxParagraph,
  pre: MdxPre,
  strong: MdxStrong,
  table: MdxTable,
  td: MdxCell,
  th: MdxHeaderCell,
  thead: MdxTableHead,
  tr: MdxRow,
  ul: MdxList,
};

const styles = stylex.create({
  paragraph: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontWeight: 400,
    lineHeight: 1.7,
    marginBottom: spacing.lg,
    marginTop: 0,
  },
  h2: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '-0.025em',
    marginBottom: spacing.sm,
    marginTop: spacing.xl,
  },
  h3: {
    color: color.text,
    fontFamily: tokens.fontSans,
    fontSize: text.md,
    fontWeight: 500,
    marginBottom: spacing.sm,
    marginTop: spacing.lg,
  },
  h4: {
    color: color.textMuted,
    fontFamily: tokens.fontSans,
    fontSize: text.sm,
    fontWeight: 500,
    marginBottom: spacing.sm,
    marginTop: spacing.lg,
  },
  strong: {
    fontWeight: 500,
  },
  emphasis: {
    fontStyle: 'italic',
  },
  strike: {
    color: color.textMuted,
    textDecorationLine: 'line-through',
  },
  list: {
    gap: spacing.sm,
    color: color.text,
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.7,
    listStyleType: 'disc',
    marginBottom: spacing.lg,
    marginTop: 0,
    paddingLeft: spacing.lg,
  },
  ordered: {
    listStyleType: 'decimal',
  },
  taskList: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  item: {
    paddingLeft: spacing.xs,
  },
  taskItem: {
    gap: spacing.sm,
    alignItems: 'flex-start',
    display: 'flex',
    paddingLeft: 0,
  },
  checkbox: {
    accentColor: color.ink,
    marginTop: 5,
  },
  quote: {
    color: color.textMuted,
    borderLeftColor: color.border,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    marginBottom: spacing.lg,
    marginTop: 0,
    paddingLeft: spacing.md,
  },
  rule: {
    borderBottomColor: color.border,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderTopStyle: 'none',
    marginBottom: spacing.xl,
    marginTop: spacing.xl,
  },
  inline: {
    borderRadius: 4,
    backgroundColor: color.fill,
    fontFamily: tokens.fontMono,
    fontSize: '0.9em',
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
  },
  tableWrap: {
    marginBottom: spacing.lg,
    overflowX: 'auto',
    width: '100%',
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: text.sm,
    width: '100%',
  },
  thead: {
    color: color.textMuted,
  },
  th: {
    fontWeight: 500,
    textAlign: 'left',
    borderBottomColor: color.border,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: spacing.sm,
    paddingRight: spacing.md,
  },
  td: {
    borderBottomColor: color.border,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: spacing.sm,
    paddingRight: spacing.md,
    paddingTop: spacing.sm,
  },
});

export { mdxComponents };
