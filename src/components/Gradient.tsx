import { styled } from '../stitches.config';
import { Box } from './Box';

export const Gradient = styled(Box, {
  // local resets here
  background:
    'fixed linear-gradient($colors$gradient1, $colors$gradient2)',
  minHeight: '$vh',
});
