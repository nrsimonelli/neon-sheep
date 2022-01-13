import { styled } from '../stitches.config';

export const Container = styled('div', {
  // local resets here
  flexShrink: 0,
  mx: 'auto',
  width: '$full',

  variants: {
    variant: {
      1: { maxWidth: '$bp1' },
      2: { maxWidth: '$bp2' },
      3: { maxWidth: '$bp3' },
      4: { maxWidth: '$bp4' },
      5: { maxWidth: '$bp5' },
      full: { maxWidth: 'none' },
      responsive: {
        '@bp1': {
          maxWidth: '$bp1',
        },
        '@bp2': {
          maxWidth: '$bp2',
        },
        '@bp3': {
          maxWidth: '$bp3',
        },
        '@bp4': {
          maxWidth: '$bp4',
        },
        '@bp5': {
          maxWidth: '$bp5',
        },
      },
    },
    visible: {
      true: {
        bg: '$appBg3',
        boxShadow: 'inset 0 0 0 1px $colors$base8',
      },
    },
  },
  defaultVariants: {
    variant: 'full',
  },
});
