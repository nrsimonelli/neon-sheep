import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Gradient } from '../../components/Gradient';
import { Text } from '../../components/Text';
import { ThemeToggle } from '../../components/ThemeToggle';

import { styled } from '../../stitches.config';
import moon from '../../moon.svg';

const Hero = () => {
  const Img = styled('img', {
    // css...
  });

  return (
    <Flex css={{ flex: 1 }}>
      <Container variant={'1'} visible>
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Img src={moon} alt='logo' />
          <Box>
            <Text>Neon Sheep</Text>
          </Box>
          <Flex justify={'center'}>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
