import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  blackA,
  blue,
  blueDark,
  red,
  redDark,
  slate,
  slateDark,
  teal,
  tealDark,
  indigo,
  indigoDark,
  sky,
  skyDark,
  whiteA,
  yellow,
  yellowDark,
} from '@radix-ui/colors';
import { SCREENS } from './constants';

export const { styled, config, theme, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...slate,
        ...blackA,
        ...whiteA,
        ...blue,
        ...teal,
        ...yellow,
        ...red,
        ...sky,
        ...indigo,
      },
      space: {
        0: 0,
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '64px',
        7: '128px',
        8: '256px',
        9: '512px',
      },
      sizes: {
        0: 0,
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '64px',
        7: '128px',
        8: '256px',
        9: '512px',
        full: '100%',
        vh: '100vh',
        vw: '100vw',
        nav: '80px',
        bp1: SCREENS[1],
        bp2: SCREENS[2],
        bp3: SCREENS[3],
        bp4: SCREENS[4],
        bp5: SCREENS[5],
      },
      fontSizes: {
        1: '13px',
        2: '15px',
        3: '17px',
        4: '21px',
        5: '27px',
        6: '35px',
        7: '59px',
        8: '72px',
        9: '96px',
      },
      fonts: {
        untitled:
          'Untitled Sans, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontWeights: {
        1: 400,
        2: 700,
        3: 900,
      },
      lineHeights: {
        1: 1,
        2: 1.25,
        3: 1.625,
      },
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        5: '9999px',
      },
      shadows: {
        1: '0 0 4px rgba(0, 0, 0, .125)',
        2: '0 0 8px rgba(0, 0, 0, .125)',
        3: '0 0 16px rgba(0, 0, 0, .125)',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '999',
      },
      transitions: {},
    },
    media: {
      bp1: `(min-width: ${SCREENS[1]})`,
      bp2: `(min-width: ${SCREENS[2]})`,
      bp3: `(min-width: ${SCREENS[3]})`,
      bp4: `(min-width: ${SCREENS[4]})`,
      bp5: `(min-width: ${SCREENS[5]})`,
    },
    utils: {
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      square: (value: Stitches.PropertyValue<'height'>) => ({
        height: value,
        width: value,
      }),
    },
  });

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...slateDark,
    ...blackA,
    ...whiteA,
    ...blueDark,
    ...tealDark,
    ...yellowDark,
    ...redDark,
    ...indigoDark,
    ...skyDark,
  },
});
