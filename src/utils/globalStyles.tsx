import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    lineHeight: 1.15,
    textSizeAdjust: '100%',
    tabSize: 4,
  },
  body: {
    margin: 0,
    fontFamily: '$untitled',
    backgroundColor: '$gray500',
  },
  code: {
    fontFamily: '$mono',
    fontSize: '1em',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
