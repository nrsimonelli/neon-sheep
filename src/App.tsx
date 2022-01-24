import React from 'react';
import moon from './moon.svg';

import { Routes, Route } from 'react-router-dom';

import { Text } from './components/Text';
import { Container } from './components/Container';
import { ThemeToggle } from './components/ThemeToggle';
import { globalStyles } from './utils/globalStyles';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Flex } from './components/Flex';

import { styled } from './stitches.config';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import PlayerProfile from './pages/PlayerProfile/PlayerProfile';
import Tournament from './pages/Tournament/Tournament';
import Hero from './pages/Hero/Hero';
import { GlobalLayout } from './layouts/GlobalLayout';

const App = () => {
  globalStyles();
  // const dispatch = useAppDispatch();
  // const themeString = useAppSelector((state) => state.theme.theme);

  return (
    <>
      <Routes>
        <Route path='/' element={<GlobalLayout />}>
          <Route index element={<Hero />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='tournaments' element={<Tournament />} />
          <Route path='profile' element={<PlayerProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
