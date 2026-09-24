'use client';

import * as stylex from '@stylexjs/stylex';
import { useSyncExternalStore } from 'react';

import { color, text, tokens } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const CHANGE_EVENT = 'themechange';

// Inlined in the root layout <head> so the saved theme lands on <html> before first paint.
export const THEME_SCRIPT = `try{var t=localStorage.getItem('${STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

const readTheme = (): Theme => {
  const saved = document.documentElement.dataset.theme;
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
};

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener('change', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener('change', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
};

const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode); the choice still applies for this page.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

const Icon = ({ theme }: { theme: Theme }) => (
  <svg
    aria-hidden
    fill="none"
    height={18}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    width={18}
  >
    {theme === 'light' ? (
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    ) : (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    )}
  </svg>
);

// Icon-only light/dark switch. Renders an empty, same-sized button on the server
// since the theme is only known in the browser.
const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, () => null);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      type="button"
      {...stylex.props(utils.focusText, styles.button)}
    >
      {theme ? <Icon theme={theme} /> : null}
    </button>
  );
};

const styles = stylex.create({
  button: {
    borderStyle: 'none',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    color: {
      default: color.textMuted,
      ':hover': color.ink,
    },
    cursor: 'pointer',
    display: 'flex',
    fontFamily: tokens.fontPixel,
    fontSize: text.md,
    justifyContent: 'center',
    position: 'absolute',
    transitionDuration: '150ms',
    transitionProperty: 'color',
    height: 40,
    // Centers the 40px target on the name's first line, icon flush with the content edge.
    right: -11,
    top: 'calc((1lh - 40px) / 2)',
    width: 40,
  },
});

export { ThemeToggle };
