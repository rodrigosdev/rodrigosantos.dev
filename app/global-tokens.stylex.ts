import * as stylex from '@stylexjs/stylex';

/**
 * Reference: https://utopia.fyi/type/calculator
 */
const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

// Font sizes in `rem` units
const MIN_FONT = {
  xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  p: Math.round(MIN_BASE_SIZE / 4) / 4,
  h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
  h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
};
// Font sizes in `rem` units
const MAX_FONT = {
  xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  p: Math.round(MAX_BASE_SIZE / 4) / 4,
  h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
  h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
};
const SLOPE = {
  xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
  xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
  h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
  h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
  h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
  h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
  h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
};
const INTERCEPT = {
  xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
  xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
  sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
  h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
  h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
  h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
  h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
  h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
};

export const text = stylex.defineVars({
  xxs: `clamp(${Math.min(MIN_FONT.xxs)}rem, calc(${INTERCEPT.xxs}rem + ${Math.round(10000 * SLOPE.xxs) / 100}vw), ${Math.max(MAX_FONT.xxs)}rem)`,
  xs: `clamp(${Math.min(MIN_FONT.xs)}rem, calc(${INTERCEPT.xs}rem + ${Math.round(10000 * SLOPE.xs) / 100}vw), ${Math.max(MAX_FONT.xs)}rem)`,
  sm: `clamp(${Math.min(MIN_FONT.sm)}rem, calc(${INTERCEPT.sm}rem + ${Math.round(10000 * SLOPE.sm) / 100}vw), ${Math.max(MAX_FONT.sm)}rem)`,
  p: `clamp(${Math.min(MIN_FONT.p)}rem, calc(${INTERCEPT.p}rem + ${Math.round(10000 * SLOPE.p) / 100}vw), ${Math.max(MAX_FONT.p)}rem)`,
  h5: `clamp(${Math.min(MIN_FONT.h5)}rem, calc(${INTERCEPT.h5}rem + ${Math.round(10000 * SLOPE.h5) / 100}vw), ${Math.max(MAX_FONT.h5)}rem)`,
  h4: `clamp(${Math.min(MIN_FONT.h4)}rem, calc(${INTERCEPT.h4}rem + ${Math.round(10000 * SLOPE.h4) / 100}vw), ${Math.max(MAX_FONT.h4)}rem)`,
  h3: `clamp(${Math.min(MIN_FONT.h3)}rem, calc(${INTERCEPT.h3}rem + ${Math.round(10000 * SLOPE.h3) / 100}vw), ${Math.max(MAX_FONT.h3)}rem)`,
  h2: `clamp(${Math.min(MIN_FONT.h2)}rem, calc(${INTERCEPT.h2}rem + ${Math.round(10000 * SLOPE.h2) / 100}vw), ${Math.max(MAX_FONT.h2)}rem)`,
  h1: `clamp(${Math.min(MIN_FONT.h1)}rem, calc(${INTERCEPT.h1}rem + ${Math.round(10000 * SLOPE.h1) / 100}vw), ${Math.max(MAX_FONT.h1)}rem)`,
});

/**
 * Reference: https://utopia.fyi/space/calculator
 *
 * EXCEPT: We are using `px` instead of `rem`
 * ------------------------------------------
 * When talking about font-size, it is the best practice to use
 * `rem` so that an end user can change the font-size using the
 * browser's font-size setting.
 *
 * However, when talking about spacing, it is the best practice to
 * use `px` because using `rems` here makes font-size behave like zoom.
 *
 * Users that prefer larger text, don't necessarily want larger spacing as well.
 */
const MULT = {
  xxxs: 0.25,
  xxs: 0.5,
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 3,
  xxl: 4,
  xxxl: 6,
  xxxxl: 8,
};
const MIN_SPACE = {
  xxxs: MULT.xxxs * MIN_BASE_SIZE,
  xxs: MULT.xxs * MIN_BASE_SIZE,
  xs: MULT.xs * MIN_BASE_SIZE,
  sm: MULT.sm * MIN_BASE_SIZE,
  md: MULT.md * MIN_BASE_SIZE,
  lg: MULT.lg * MIN_BASE_SIZE,
  xl: MULT.xl * MIN_BASE_SIZE,
  xxl: MULT.xxl * MIN_BASE_SIZE,
  xxxl: MULT.xxxl * MIN_BASE_SIZE,
  xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
};
const MAX_SPACE = {
  xxxs: MULT.xxxs * MAX_BASE_SIZE,
  xxs: MULT.xxs * MAX_BASE_SIZE,
  xs: MULT.xs * MAX_BASE_SIZE,
  sm: MULT.sm * MAX_BASE_SIZE,
  md: MULT.md * MAX_BASE_SIZE,
  lg: MULT.lg * MAX_BASE_SIZE,
  xl: MULT.xl * MAX_BASE_SIZE,
  xxl: MULT.xxl * MAX_BASE_SIZE,
  xxxl: MULT.xxxl * MAX_BASE_SIZE,
  xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
};
const SLOPE_SPACE = {
  xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
  xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
  xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
  sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
  md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
  lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
  xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
  xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
};
// rounded to the nearest 0.25px
const INTERCEPT_SPACE = {
  xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
  xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
  xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
  sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
  md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
  lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
  xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
  xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
  xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
  xxxxl: Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
};

export const spacing = stylex.defineVars({
  xxxs: `clamp(${MIN_SPACE.xxxs}px, calc(${INTERCEPT_SPACE.xxxs}px + ${Math.round(10000 * SLOPE_SPACE.xxxs) / 100}vw), ${MAX_SPACE.xxxs}px)`,
  xxs: `clamp(${MIN_SPACE.xxs}px, calc(${INTERCEPT_SPACE.xxs}px + ${Math.round(10000 * SLOPE_SPACE.xxs) / 100}vw), ${MAX_SPACE.xxs}px)`,
  xs: `clamp(${MIN_SPACE.xs}px, calc(${INTERCEPT_SPACE.xs}px + ${Math.round(10000 * SLOPE_SPACE.xs) / 100}vw), ${MAX_SPACE.xs}px)`,
  sm: `clamp(${MIN_SPACE.sm}px, calc(${INTERCEPT_SPACE.sm}px + ${Math.round(10000 * SLOPE_SPACE.sm) / 100}vw), ${MAX_SPACE.sm}px)`,
  md: `clamp(${MIN_SPACE.md}px, calc(${INTERCEPT_SPACE.md}px + ${Math.round(10000 * SLOPE_SPACE.md) / 100}vw), ${MAX_SPACE.md}px)`,
  lg: `clamp(${MIN_SPACE.lg}px, calc(${INTERCEPT_SPACE.lg}px + ${Math.round(10000 * SLOPE_SPACE.lg) / 100}vw), ${MAX_SPACE.lg}px)`,
  xl: `clamp(${MIN_SPACE.xl}px, calc(${INTERCEPT_SPACE.xl}px + ${Math.round(10000 * SLOPE_SPACE.xl) / 100}vw), ${MAX_SPACE.xl}px)`,
  xxl: `clamp(${MIN_SPACE.xxl}px, calc(${INTERCEPT_SPACE.xxl}px + ${Math.round(10000 * SLOPE_SPACE.xxl) / 100}vw), ${MAX_SPACE.xxl}px)`,
  xxxl: `clamp(${MIN_SPACE.xxxl}px, calc(${INTERCEPT_SPACE.xxxl}px + ${Math.round(10000 * SLOPE_SPACE.xxxl) / 100}vw), ${MAX_SPACE.xxxl}px)`,
  xxxxl: `clamp(${MIN_SPACE.xxxxl}px, calc(${INTERCEPT_SPACE.xxxxl}px + ${Math.round(10000 * SLOPE_SPACE.xxxxl) / 100}vw), ${MAX_SPACE.xxxxl}px)`,
});

/**
 * Color Tokens
 */
const DARK_MODE = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  white: '#fff',
  black: '#000',
  neutral50: 'oklch(98.5% 0 0)',
  neutral100: 'oklch(97% 0 0)',
  neutral200: 'oklch(92.2% 0 0)',
  neutral300: 'oklch(87% 0 0)',
  neutral400: 'oklch(70.8% 0 0)',
  neutral500: 'oklch(55.6% 0 0)',
  neutral600: 'oklch(43.9% 0 0)',
  neutral700: 'oklch(37.1% 0 0)',
  neutral800: 'oklch(26.9% 0 0)',
  neutral900: 'oklch(20.5% 0 0)',
  neutral950: 'oklch(14.5% 0 0)',
});

export const globalTokens = stylex.defineVars({
  maxWidth: `${MAX_WIDTH}px`,
  fontSans: 'var(--font-geist-sans), sans-serif',
  fontMono: 'var(--font-geist-mono), ui-monospace, monospace',
  fontPixel: 'var(--font-geist-pixel-square), monospace',

  base100: { default: colors.white, [DARK_MODE]: colors.neutral900 },
  base200: { default: colors.neutral200, [DARK_MODE]: colors.neutral800 },
  base300: { default: colors.neutral300, [DARK_MODE]: colors.neutral700 },
  base1000: { default: colors.neutral950, [DARK_MODE]: colors.white },

  surfaceBg: { default: colors.neutral50, [DARK_MODE]: colors.black },
  surfaceBgDepth: { default: colors.white, [DARK_MODE]: colors.neutral900 },

  border: { default: colors.neutral200, [DARK_MODE]: colors.neutral800 },
  marker: { default: colors.neutral300, [DARK_MODE]: colors.neutral700 },

  textStrong: { default: colors.neutral900, [DARK_MODE]: colors.neutral100 },
  textSoft: { default: colors.neutral600, [DARK_MODE]: colors.neutral400 },

  selection: { default: colors.neutral300, [DARK_MODE]: colors.neutral600 },

  easeBounce: 'cubic-bezier(0.2, -0.25, 0, 1.6)',
  easeBounceLite: 'cubic-bezier(0, 0, 0, 1.1)',
});

export const scales = stylex.defineVars({
  small: 'scale(0.95)',
  medium: 'scale(1)',
  large: 'scale(1.2)',
});
