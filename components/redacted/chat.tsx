'use client';

import * as stylex from '@stylexjs/stylex';

import { color, spacing, text, tokens } from '~/app/global-tokens.stylex';

const pulse = stylex.keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

const hideTyping = stylex.keyframes({
  from: {
    position: 'static',
    visibility: 'visible',
  },
  to: {
    position: 'absolute',
    visibility: 'hidden',
  },
});

const showText = stylex.keyframes({
  from: {
    position: 'absolute',
    visibility: 'hidden',
  },
  to: {
    position: 'static',
    visibility: 'visible',
  },
});

const reveal = stylex.keyframes({
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const revealFollowup = stylex.keyframes({
  from: {
    opacity: 0,
    transform: `translateY(${spacing.sm})`,
    visibility: 'hidden',
    marginTop: 0,
    maxHeight: 0,
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
    visibility: 'visible',
    marginTop: spacing.sm,
    maxHeight: spacing.xxxl,
  },
});

const sequenceEnd = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 0 },
});

const Dot = ({ delay = 0 }: { delay?: number }) => (
  <div {...stylex.props(styles.dot, styles.dotDelay(delay))} />
);

const Message = ({
  active,
  enter,
  text,
  typingUntil,
}: {
  active: boolean;
  enter?: boolean;
  text: string;
  typingUntil: '1s' | '3s';
}) => (
  <div {...stylex.props(styles.bubble, enter && styles.revealXs)}>
    <div {...stylex.props(styles.typing, active && styles.hideTyping(typingUntil))}>
      <Dot />
      <Dot delay={100} />
      <Dot delay={200} />
    </div>
    <span {...stylex.props(styles.text, active && styles.showText(typingUntil))}>{text}</span>
  </div>
);

const Chat = ({ active, setActive }: { active: boolean; setActive: () => void }) => {
  return (
    <div {...stylex.props(styles.root, active && styles.rootActive)}>
      <Message active={active} enter={active} text="yooo sorry" typingUntil="1s" />
      <div {...stylex.props(styles.followup, active && styles.followupActive)}>
        <Message active={active} text="i'll update you later 🤫" typingUntil="3s" />
      </div>
      {active ? (
        <span aria-hidden {...stylex.props(styles.sequence)} onAnimationEnd={setActive} />
      ) : null}
    </div>
  );
};

const styles = stylex.create({
  root: {
    display: 'flex',
    filter: {
      default: 'blur(8px)',
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    flexDirection: 'column',
    fontFamily: tokens.fontSans,
    justifyContent: 'flex-end',
    opacity: 0,
    position: 'absolute',
    transform: {
      default: 'scale(1.05)',
      '@media (prefers-reduced-motion: reduce)': 'scale(1)',
    },
    transformOrigin: 'left bottom',
    transitionDuration: {
      default: '800ms',
      '@media (prefers-reduced-motion: reduce)': '0ms',
    },
    transitionProperty: 'filter, opacity, transform, visibility',
    transitionTimingFunction: tokens.bounce,
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    bottom: '100%',
    left: 0,
    marginBottom: spacing.sm,
    width: 'max-content',
  },
  rootActive: {
    filter: 'blur(0px)',
    opacity: 1,
    transform: 'scale(1)',
    visibility: 'visible',
  },
  sequence: {
    overflow: 'hidden',
    animationDuration: '5s',
    animationFillMode: 'forwards',
    animationName: sequenceEnd,
    pointerEvents: 'none',
    position: 'absolute',
    visibility: 'hidden',
    height: 0,
    width: 0,
  },
  followup: {
    overflow: 'hidden',
    marginTop: spacing.sm,
    width: 'max-content',
  },
  followupActive: {
    animationDelay: '1.5s',
    animationDuration: '0.25s',
    animationFillMode: 'both',
    animationName: {
      default: revealFollowup,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'cubic-bezier(0.3, 0, 0, 1)',
    opacity: {
      default: 0,
      '@media (prefers-reduced-motion: reduce)': 1,
    },
    transform: {
      default: `translateY(${spacing.sm})`,
      '@media (prefers-reduced-motion: reduce)': 'translateY(0)',
    },
  },
  revealXs: {
    animationDuration: '0.25s',
    animationFillMode: 'forwards',
    animationName: {
      default: reveal,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'cubic-bezier(0.3, 0, 0, 1)',
    opacity: {
      default: 0,
      '@media (prefers-reduced-motion: reduce)': 1,
    },
    transform: {
      default: `translateY(${spacing.sm})`,
      '@media (prefers-reduced-motion: reduce)': 'translateY(0)',
    },
  },
  bubble: {
    borderRadius: spacing.md,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: color.fill,
    color: color.text,
    display: 'flex',
    fontSize: text.sm,
    lineHeight: 1.625,
    position: 'relative',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    paddingBottom: spacing.xs,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingTop: spacing.xs,
    width: 'max-content',
  },
  typing: {
    gap: spacing.xs,
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    visibility: 'hidden',
    height: spacing.lg,
  },
  hideTyping: (delay: '1s' | '3s') => ({
    animationDelay: delay,
    animationDuration: '0s',
    animationFillMode: 'both',
    animationName: {
      default: hideTyping,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
  }),
  text: {
    alignItems: 'center',
    display: 'flex',
    lineHeight: 1.625,
    position: 'static',
    visibility: 'visible',
    minHeight: spacing.lg,
  },
  showText: (delay: '1s' | '3s') => ({
    animationDelay: delay,
    animationDuration: '0s',
    animationFillMode: 'both',
    animationName: {
      default: showText,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
  }),
  dot: {
    borderRadius: '50%',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      default: pulse,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
    backgroundColor: `color-mix(in oklab, ${color.ink} 50%, transparent)`,
    height: spacing.sm,
    width: spacing.sm,
  },
  dotDelay: (delay: number) => ({
    animationDelay: `${delay}ms`,
  }),
});

export { Chat };
