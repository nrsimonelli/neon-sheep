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

        appBg1: '$base1',
        appBg2: '$base2',
        appBg3: '$base3',

        shadow1: '$blackA1',
        shadow2: '$blackA2',
        shadow3: '$blackA3',

        error1: '$red2',
        error2: '$red9',
        error3: '$red11',

        success1: '$teal2',
        success2: '$teal9',
        success3: '$teal11',

        warning1: '$yellow2',
        warning2: '$yellow9',
        warning3: '$yellow11',

        info1: '$blue2',
        info2: '$blue9',
        info3: '$blue11',

        loContrast: '$base11',
        hiContrast: '$base12',

        white: '$whiteA12',
        black: '$blackA12',

        gradient1: '#f5f7fa',
        gradient2: '#c3cfe2',

        base1: '$slate1',
        base2: '$slate2',
        base3: '$slate3',
        base4: '$slate4',
        base5: '$slate5',
        base6: '$slate6',
        base7: '$slate7',
        base8: '$slate8',
        base9: '$slate9',
        base10: '$slate10',
        base11: '$slate11',
        base12: '$slate12',
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
        10: '1024px',
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
        10: '1024px',
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
        1: '12px',
        2: '14px',
        3: '16px',
        4: '20px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontWeights: {
        1: 400,
        2: 600,
        3: 700,
      },
      lineHeights: {
        body: 1.5,
        heading: 1.15,
      },
      letterSpacings: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        pill: '9999px',
      },
      shadows: {},
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

    appBg1: '$base1',
    appBg2: '$base2',
    appBg3: '$base3',

    shadow1: '$blackA1',
    shadow2: '$blackA2',
    shadow3: '$blackA3',

    error1: '$red2',
    error2: '$red9',
    error3: '$red11',

    success1: '$teal2',
    success2: '$teal9',
    success3: '$teal11',

    warning1: '$yellow2',
    warning2: '$yellow9',
    warning3: '$yellow11',

    info1: '$blue2',
    info2: '$blue9',
    info3: '$blue11',

    loContrast: '$base11',
    hiContrast: '$base12',

    white: '$whiteA12',
    black: '$blackA12',

    gradient1: '#29323c',
    gradient2: '#485563',

    base1: '$slate1',
    base2: '$slate2',
    base3: '$slate3',
    base4: '$slate4',
    base5: '$slate5',
    base6: '$slate6',
    base7: '$slate7',
    base8: '$slate8',
    base9: '$slate9',
    base10: '$slate10',
    base11: '$slate11',
    base12: '$slate12',
  },
});
