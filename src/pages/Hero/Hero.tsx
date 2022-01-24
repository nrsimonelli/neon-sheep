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
    <Gradient>
      <Container
        variant={'2'}
        css={{ bg: '$appBg3', minHeight: '$vh' }}
      >
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Img src={moon} alt='logo' />
          <Box visible css={{ zIndex: '$2' }}>
            <Text>Neon Sheep</Text>
          </Box>
          <ThemeToggle />
          <Flex justify={'center'} css={{ '& Button': { mr: '$3' } }}>
            <Button size={'2'} variant={'secondary'}>
              Overview
            </Button>
            <Button size={'2'} variant={'primary'}>
              Hello
            </Button>
            <Button size={'2'} variant={'outline'}>
              Hello
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Gradient>
  );
};

export default Hero;
