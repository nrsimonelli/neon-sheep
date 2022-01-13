import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    textSizeAdjust: '100%',
    tabSize: 4,
  },
  body: {
    margin: 0,
    fontFamily: '$untitled',
    lineHeight: '$body',
  },
  code: {
    fontFamily: '$mono',
    fontSize: '$3',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
