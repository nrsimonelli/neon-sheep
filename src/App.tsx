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

const App = () => {
  globalStyles();
  const dispatch = useAppDispatch();
  const themeString = useAppSelector((state) => state.theme.theme);

  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Container variant={'1'}>
        <img src={moon} alt='logo' />
        <Box padding={'4'} visible>
          <Text>Hello Vite + React!</Text>
        </Box>
        <p>
          <button
            type='button'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
          <ThemeToggle />
        </p>

        <Flex justify={'center'} css={{ '& Button': { mr: '$3' } }}>
          <Button
            size={'3'}
            variant={'base'}
            color={'secondary'}
            shape={'5'}
          >
            Overview
          </Button>
          <Button size={'3'} variant={'hot'} color={'secondary'}>
            Hello
          </Button>
          <Button size={'3'} variant={'ghost'} color={'secondary'}>
            Hello
          </Button>
        </Flex>
        <Flex
          justify={'center'}
          css={{ mt: '$3', '& Button': { mr: '$3' } }}
        >
          <Button
            size={'3'}
            variant={'base'}
            color={'primary'}
            shape={'5'}
          >
            Overview
          </Button>
          <Button size={'3'} variant={'hot'} color={'primary'}>
            Hello
          </Button>
          <Button size={'3'} variant={'ghost'} color={'primary'}>
            Hello
          </Button>
        </Flex>
        <Flex
          justify={'center'}
          css={{ mt: '$3', '& Button': { mr: '$3' } }}
        >
          <Button
            size={'3'}
            variant={'base'}
            color={'accent'}
            shape={'5'}
          >
            Overview
          </Button>
          <Button size={'3'} variant={'hot'} color={'accent'}>
            Hello
          </Button>
          <Button size={'3'} variant={'ghost'} color={'accent'}>
            Hello
          </Button>
        </Flex>
      </Container>
    </Layout>
  );
};

export default App;
