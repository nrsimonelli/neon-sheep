import { useContext } from 'react';
import { THEMES } from '../constants';
import { ThemeContext } from '../utils/ThemeContext';

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;

  const switchTheme = () => {
    isDark ? setTheme(THEMES.DEFAULT) : setTheme(THEMES.DARK);
  };

  return <button onClick={switchTheme}>Theme</button>;
};
