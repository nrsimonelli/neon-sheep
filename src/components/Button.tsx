import { styled } from '../stitches.config';

export const Button = styled('button', {
  // local resets here
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTaphighlightColor: 'rgba(0,0,0,0)',
  p: '$2',

  '&:disabled': {
    backgroundColor: '$base2',
    boxShadow: 'inset 0 0 0 1px $colors$base7',
    color: '$base8',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      ghost: {},
      hot: {},
      base: {},
    },
    shape: {
      0: {
        borderRadius: '$0',
      },
      1: {
        borderRadius: '$1',
      },
      2: {
        borderRadius: '$2',
      },
      3: {
        borderRadius: '$3',
      },
      4: {
        borderRadius: '$4',
      },
      5: {
        borderRadius: '$5',
      },
    },
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
    },
    color: {
      primary: {
        color: '$primary11',
      },
      secondary: {
        color: '$secondary11',
      },
      accent: {
        color: '$accent11',
      },
      base: {
        color: '$base11',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'ghost',
      color: 'primary',
      css: {
        backgroundColor: '$primary1',
        boxShadow: 'inset 0 0 0 1px $colors$primary7',
        '&:hover': {
          // backgroundColor: '$primary1',
          boxShadow: 'inset 0 0 0 1px $colors$primary8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary8, 0 0 0 1px $colors$primary8',
        },
      },
    },
    {
      variant: 'hot',
      color: 'primary',
      css: {
        color: '$white',
        backgroundColor: '$primary9',
        '&:hover': {
          backgroundColor: '$primary10',
        },
      },
    },
    {
      variant: 'base',
      color: 'primary',
      css: {
        backgroundColor: '$primary4',
        '&:hover': {
          backgroundColor: '$primary5',
        },
        '&:active': {
          backgroundColor: '$primary6',
        },
      },
    },
    {
      variant: 'ghost',
      color: 'base',
      css: {
        backgroundColor: '$base1',
        boxShadow: 'inset 0 0 0 1px $colors$base7',
        '&:hover': {
          // backgroundColor: '$base1',
          boxShadow: 'inset 0 0 0 1px $colors$base8',
        },
        '&:active': {
          boxShadow:
            'inset 0 0 0 1px $colors$base8, 0 0 0 1px $colors$base8',
        },
      },
    },
    {
      variant: 'hot',
      color: 'base',
      css: {
        color: '$white',
        backgroundColor: '$base9',
        '&:hover': {
          backgroundColor: '$base10',
        },
        '&:active': {
          backgroundColor: '$base11',
        },
      },
    },
    {
      variant: 'base',
      color: 'base',
      css: {
        backgroundColor: '$base4',
        '&:hover': {
          backgroundColor: '$base5',
        },
        '&:active': {
          backgroundColor: '$base6',
        },
      },
    },
  ],
  defaultVariants: {
    shape: '1',
    size: '1',
    color: 'primary',
    variant: 'base',
  },
});
