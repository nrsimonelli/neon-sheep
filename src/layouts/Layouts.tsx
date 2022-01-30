import { Outlet } from 'react-router-dom';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export const GlobalLayout = () => {
  return (
    <Flex direction={'column'} css={{ minHeight: '$vh' }}>
      <Box>
        <Container variant={'responsive'} css={{ height: '$6' }}>
          <Flex
            justify={'start'}
            align={'center'}
            css={{ height: '$full' }}
          >
            <Text>Nav?</Text>
          </Flex>
        </Container>
      </Box>
      <Outlet />
      <Box>
        <Container variant={'responsive'} css={{ height: '$7' }}>
          <Flex
            justify={'start'}
            align={'center'}
            css={{ height: '$full' }}
          >
            <Text>Footer?</Text>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};
