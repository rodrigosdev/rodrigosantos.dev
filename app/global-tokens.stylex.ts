import * as stylex from '@stylexjs/stylex';

// https://utopia.fyi/type/calculator
const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

const MIN_FONT = {
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  md: MIN_BASE_SIZE / 16,
};
const MAX_FONT = {
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  md: MAX_BASE_SIZE / 16,
};
const FONT_SLOPE = {
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  md: (16 * (MAX_FONT.md - MIN_FONT.md)) / (MAX_WIDTH - MIN_WIDTH),
};
const FONT_INTERCEPT = {
  sm: Math.round(100 * (MIN_FONT.sm - FONT_SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  md: Math.round(100 * (MIN_FONT.md - FONT_SLOPE.md * (MIN_WIDTH / 16))) / 100,
};

export const text = stylex.defineConsts({
  sm: `clamp(${Math.min(MIN_FONT.sm, MAX_FONT.sm)}rem, calc(${FONT_INTERCEPT.sm}rem + ${Math.round(10000 * FONT_SLOPE.sm) / 100}vw), ${Math.max(MIN_FONT.sm, MAX_FONT.sm)}rem)`,
  md: `clamp(${Math.min(MIN_FONT.md, MAX_FONT.md)}rem, calc(${FONT_INTERCEPT.md}rem + ${Math.round(10000 * FONT_SLOPE.md) / 100}vw), ${Math.max(MIN_FONT.md, MAX_FONT.md)}rem)`,
});

// https://utopia.fyi/space/calculator. Spacing uses px so browser font-size changes don't scale layout.
const MIN_SPACE = {
  xs: 0.25 * MIN_BASE_SIZE,
  sm: 0.5 * MIN_BASE_SIZE,
  md: 0.75 * MIN_BASE_SIZE,
  lg: 1.5 * MIN_BASE_SIZE,
  xl: 2 * MIN_BASE_SIZE,
  xxl: 3 * MIN_BASE_SIZE,
  xxxl: 4 * MIN_BASE_SIZE,
};
const MAX_SPACE = {
  xs: 0.25 * MAX_BASE_SIZE,
  sm: 0.5 * MAX_BASE_SIZE,
  md: 0.75 * MAX_BASE_SIZE,
  lg: 1.5 * MAX_BASE_SIZE,
  xl: 2 * MAX_BASE_SIZE,
  xxl: 3 * MAX_BASE_SIZE,
  xxxl: 4 * MAX_BASE_SIZE,
};
const SPACE_SLOPE = {
  xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
  sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
  md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
  lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
  xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
  xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
};
const SPACE_INTERCEPT = {
  xs: Math.round(4 * (MIN_SPACE.xs - SPACE_SLOPE.xs * MIN_WIDTH)) / 4,
  sm: Math.round(4 * (MIN_SPACE.sm - SPACE_SLOPE.sm * MIN_WIDTH)) / 4,
  md: Math.round(4 * (MIN_SPACE.md - SPACE_SLOPE.md * MIN_WIDTH)) / 4,
  lg: Math.round(4 * (MIN_SPACE.lg - SPACE_SLOPE.lg * MIN_WIDTH)) / 4,
  xl: Math.round(4 * (MIN_SPACE.xl - SPACE_SLOPE.xl * MIN_WIDTH)) / 4,
  xxl: Math.round(4 * (MIN_SPACE.xxl - SPACE_SLOPE.xxl * MIN_WIDTH)) / 4,
  xxxl: Math.round(4 * (MIN_SPACE.xxxl - SPACE_SLOPE.xxxl * MIN_WIDTH)) / 4,
};

export const spacing = stylex.defineConsts({
  xs: `clamp(${MIN_SPACE.xs}px, calc(${SPACE_INTERCEPT.xs}px + ${Math.round(10000 * SPACE_SLOPE.xs) / 100}vw), ${MAX_SPACE.xs}px)`,
  sm: `clamp(${MIN_SPACE.sm}px, calc(${SPACE_INTERCEPT.sm}px + ${Math.round(10000 * SPACE_SLOPE.sm) / 100}vw), ${MAX_SPACE.sm}px)`,
  md: `clamp(${MIN_SPACE.md}px, calc(${SPACE_INTERCEPT.md}px + ${Math.round(10000 * SPACE_SLOPE.md) / 100}vw), ${MAX_SPACE.md}px)`,
  lg: `clamp(${MIN_SPACE.lg}px, calc(${SPACE_INTERCEPT.lg}px + ${Math.round(10000 * SPACE_SLOPE.lg) / 100}vw), ${MAX_SPACE.lg}px)`,
  xl: `clamp(${MIN_SPACE.xl}px, calc(${SPACE_INTERCEPT.xl}px + ${Math.round(10000 * SPACE_SLOPE.xl) / 100}vw), ${MAX_SPACE.xl}px)`,
  xxl: `clamp(${MIN_SPACE.xxl}px, calc(${SPACE_INTERCEPT.xxl}px + ${Math.round(10000 * SPACE_SLOPE.xxl) / 100}vw), ${MAX_SPACE.xxl}px)`,
  xxxl: `clamp(${MIN_SPACE.xxxl}px, calc(${SPACE_INTERCEPT.xxxl}px + ${Math.round(10000 * SPACE_SLOPE.xxxl) / 100}vw), ${MAX_SPACE.xxxl}px)`,
});

export const tokens = stylex.defineConsts({
  bounce: 'cubic-bezier(0.2, -0.25, 0, 1.6)',
  container: '42rem',
  fontMono: 'var(--font-geist-mono), ui-monospace, monospace',
  fontPixel: 'var(--font-geist-pixel-square), monospace',
  fontSans: 'var(--font-geist-sans), sans-serif',
});

const DARK = '@media (prefers-color-scheme: dark)';

export const color = stylex.defineVars({
  bg: { default: 'oklch(98.5% 0 0)', [DARK]: '#000' },
  border: { default: 'oklch(92.2% 0 0)', [DARK]: 'oklch(26.9% 0 0)' },
  fill: { default: 'oklch(92.2% 0 0)', [DARK]: 'oklch(26.9% 0 0)' },
  ink: { default: 'oklch(14.5% 0 0)', [DARK]: '#fff' },
  selection: { default: 'oklch(87% 0 0)', [DARK]: 'oklch(43.9% 0 0)' },
  surface: { default: '#fff', [DARK]: 'oklch(20.5% 0 0)' },
  text: { default: 'oklch(20.5% 0 0)', [DARK]: 'oklch(97% 0 0)' },
  textMuted: { default: 'oklch(43.9% 0 0)', [DARK]: 'oklch(70.8% 0 0)' },
});
