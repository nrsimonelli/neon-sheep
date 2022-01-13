import { styled } from '../stitches.config';

export const Text = styled('span', {
  // local resets here
  display: 'block',

  variants: {
    type: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      inherit: {
        textTransform: 'inherit',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
      8: {
        fontSize: '$8',
      },
      9: {
        fontSize: '$9',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
  },
});
