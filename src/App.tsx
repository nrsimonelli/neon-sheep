import { useState } from 'react';
import { Box } from './components/Box';
import { Text } from './components/Text';
import { Container } from './components/Container';
import { ThemeToggle } from './components/ThemeToggle';
import moon from './moon.svg';
import { globalStyles } from './utils/globalStyles';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { Layout } from './components/Layout';
import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { styled } from './stitches.config';

const App = () => {
  globalStyles();
  const dispatch = useAppDispatch();
  const themeString = useAppSelector((state) => state.theme.theme);

  const [count, setCount] = useState(0);

  const Img = styled('img', {});

  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
