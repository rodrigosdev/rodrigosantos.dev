'use client';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import { globalTokens as $ } from '~/app/global-tokens.stylex';
import { utils } from '~/styles/utils';

import { Chat } from './chat';

const GLYPHS = [
  ['▓', '▒', '░'],
  ['▒', '░', '▓'],
  ['░', '▓', '▒'],
  ['▓', '░', '▒'],
  ['▒', '▓', '░'],
  ['░', '▒', '▓'],
  ['▓', '▒', '░'],
  ['░', '▓', '▒'],
] as const;

const scramble = stylex.keyframes({
  '0%': { opacity: 1 },
  '33%': { opacity: 1 },
  '34%': { opacity: 0 },
  '100%': { opacity: 0 },
});

const Glyph = ({ chars }: { chars: (typeof GLYPHS)[number] }) => (
  <span {...stylex.props(styles.glyph)}>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar0)}>{chars[0]}</span>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar1)}>{chars[1]}</span>
    <span {...stylex.props(styles.glyphChar, styles.glyphChar2)}>{chars[2]}</span>
  </span>
);

const Redacted = () => {
  const [chatActive, setChatActive] = useState(false);

  return (
    <button
      {...stylex.props(styles.trigger, utils.focusText, chatActive && styles.triggerIdle)}
      onClick={() => setChatActive(true)}
      type="button"
    >
      <Chat active={chatActive} setActive={() => setChatActive(false)} />
      {GLYPHS.map((chars, index) => (
        <Glyph chars={chars} key={index} />
      ))}
    </button>
  );
};

const styles = stylex.create({
  trigger: {
    padding: 0,
    borderStyle: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    cursor: 'help',
    fontFamily: $.fontMono,
    lineHeight: 1,
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'baseline',
  },
  triggerIdle: {
    cursor: 'auto',
  },
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

export { Redacted };
