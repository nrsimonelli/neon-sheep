import { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import moon from './moon.svg';
import { globalStyles } from './utils/globalStyles';
import { useAppDispatch, useAppSelector } from './utils/hooks';

const App = () => {
  globalStyles();
  const dispatch = useAppDispatch();
  const themeString = useAppSelector((state) => state.theme.theme);

  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={moon} alt='logo' />
      <p>Hello Vite + React!</p>
      <p>
        <button
          type='button'
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <ThemeToggle />
      </p>
    </div>
  );
};

export default App;
