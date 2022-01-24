import { Outlet } from 'react-router-dom';
import { Box } from '../components/Box';
import { Text } from '../components/Text';

export const GlobalLayout = () => {
  return (
    <Box>
      <Text>layout</Text>
      <Outlet />
    </Box>
  );
};
