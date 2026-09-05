import * as stylex from '@stylexjs/stylex';

const scramble = stylex.keyframes({
  '0%': { opacity: 1 },
  '33%': { opacity: 1 },
  '34%': { opacity: 0 },
  '100%': { opacity: 0 },
});

const Glyph = ({ chars }: { chars: readonly [string, string, string] }) => (
  <span {...stylex.props(styles.glyph)}>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar0)}>{chars[0]}</span>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar1)}>{chars[1]}</span>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar2)}>{chars[2]}</span>
  </span>
);

const Glyphs = ({ sequences }: { sequences: ReadonlyArray<readonly [string, string, string]> }) => (
  <>
    {sequences.map((chars, index) => (
      <Glyph chars={chars} key={index} />
    ))}
  </>
);

const styles = stylex.create({
  glyph: {
    display: 'inline-grid',
  },
  glyphChar: {
    gridColumn: '1',
    gridRow: '1',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationName: {
      default: scramble,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'step-end',
    opacity: 0,
  },
  glyphChar0: {
    animationDelay: '0s',
    opacity: {
      default: 0,
      '@media (prefers-reduced-motion: reduce)': 1,
    },
  },
  glyphChar1: {
    animationDelay: '-1s',
  },
  glyphChar2: {
    animationDelay: '-0.5s',
  },
});

export { Glyphs };
