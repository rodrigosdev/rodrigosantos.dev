'use client';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import { tokens } from '~/app/global-tokens.stylex';
import { Glyphs } from '~/components/glyphs';
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

const Redacted = () => {
  const [chatActive, setChatActive] = useState(false);

  return (
    <button
      {...stylex.props(styles.trigger, utils.focusText, chatActive && styles.triggerIdle)}
      onClick={() => setChatActive(true)}
      type="button"
    >
      <Chat active={chatActive} setActive={() => setChatActive(false)} />
      <Glyphs sequences={GLYPHS} />
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
    fontFamily: tokens.fontMono,
    lineHeight: 1,
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'baseline',
  },
  triggerIdle: {
    cursor: 'auto',
  },
});

export { Redacted };
