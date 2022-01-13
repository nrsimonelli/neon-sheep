import { useState } from 'react';
import { Box } from './components/Box';
import { Text } from './components/Text';
import { Container } from './components/Container';
import { ThemeToggle } from './components/ThemeToggle';
import moon from './moon.svg';
import { globalStyles } from './utils/globalStyles';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { Layout } from './components/Layout';

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
      </Container>
    </Layout>
  );
};

export default App;
