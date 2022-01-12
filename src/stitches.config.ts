import { createStitches } from '@stitches/react';

export const { styled, config, theme, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        gray500: 'hsl(206,10%,76%)',
        blue500: 'hsl(206,100%,50%)',
        purple500: 'hsl(252,78%,60%)',
        green500: 'hsl(148,60%,60%)',
        red500: 'hsl(352,100%,62%)',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });

export const darkTheme = createTheme('dark-theme', {
  colors: {
    gray500: 'hsl(206,10%,16%)',
    blue500: 'hsl(206,100%,40%)',
    purple500: 'hsl(252,78%,40%)',
    green500: 'hsl(148,60%,40%)',
    red500: 'hsl(352,100%,42%)',
  },
});
