import { styled } from '../stitches.config';

export const Box = styled('div', {
  // local resets here

  variants: {
    padding: {
      0: { p: '$0' },
      1: { p: '$1' },
      2: { p: '$2' },
      3: { p: '$3' },
      4: { p: '$4' },
      5: { p: '$5' },
    },
    visible: {
      true: {
        bg: '$info2',
        boxShadow: 'inset 0 0 0 2px $colors$error3',
      },
    },
  },
});
