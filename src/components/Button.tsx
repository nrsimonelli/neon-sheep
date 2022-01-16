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
  py: '12px',
  px: '20px',

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
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$primary8',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$primary9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary9, 0 0 0 1px $colors$primary9',
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
        '&:active': {
          backgroundColor: '$primary9',
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
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$primary11',
        },
      },
    },
    {
      variant: 'ghost',
      color: 'secondary',
      css: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$secondary9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary9, 0 0 0 1px $colors$secondary9',
        },
      },
    },
    {
      variant: 'hot',
      color: 'secondary',
      css: {
        color: '$white',
        backgroundColor: '$secondary9',
        '&:hover': {
          backgroundColor: '$secondary10',
        },
      },
    },
    {
      variant: 'base',
      color: 'secondary',
      css: {
        backgroundColor: '$secondary4',
        '&:hover': {
          backgroundColor: '$secondary5',
        },
        '&:active': {
          backgroundColor: '$secondary6',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$secondary11',
        },
      },
    },
    {
      variant: 'ghost',
      color: 'base',
      css: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$base8',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$base9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$base9, 0 0 0 1px $colors$base9',
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
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$base11',
        },
      },
    },
    {
      variant: 'ghost',
      color: 'accent',
      css: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$accent8',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$accent9',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accent9, 0 0 0 1px $colors$accent9',
        },
      },
    },
    {
      variant: 'hot',
      color: 'accent',
      css: {
        color: '$black',
        backgroundColor: '$accent9',
        '&:hover': {
          backgroundColor: '$accent10',
        },
      },
    },
    {
      variant: 'base',
      color: 'accent',
      css: {
        backgroundColor: '$accent4',
        '&:hover': {
          backgroundColor: '$accent5',
        },
        '&:active': {
          backgroundColor: '$accent6',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$accent11',
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
