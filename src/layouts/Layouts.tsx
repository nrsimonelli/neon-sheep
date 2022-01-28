import { Outlet } from 'react-router-dom';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export const GlobalLayout = () => {
  return (
    <Flex direction={'column'} css={{ minHeight: '$vh' }}>
      <Box visible css={{ bg: '$colors$red5' }}>
        <Container variant={'responsive'} visible>
          <Text css={{ p: '$2' }}>Nav?</Text>
        </Container>
      </Box>
      <Outlet />
      <Box visible css={{ bg: '$colors$blue5' }}>
        <Container variant={'1'} visible>
          <Text css={{ p: '$2' }}>Footer?</Text>
        </Container>
      </Box>
    </Flex>
  );
};
