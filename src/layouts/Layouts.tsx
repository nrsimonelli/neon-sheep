import { Outlet } from 'react-router-dom';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export const GlobalLayout = () => {
  return (
    <Flex direction={'column'} css={{ minHeight: '$vh' }}>
      <Box visible>
        <Container variant={'1'} visible>
          <Text css={{ p: '$2' }}>Nav?</Text>
        </Container>
      </Box>
      <Outlet />
      <Box>footer</Box>
    </Flex>
  );
};
