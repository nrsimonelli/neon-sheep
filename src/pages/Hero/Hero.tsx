import { Box } from '../../components/Box';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { ThemeToggle } from '../../components/ThemeToggle';

const Hero = () => {
  return (
    <Flex css={{ flex: 1, bg: '$colors$indigo5' }}>
      <Container variant={'responsive'} visible>
        <Flex
          direction={'column'}
          justify={'start'}
          align={'start'}
          css={{ bg: '$yellow5', height: '100%' }}
        >
          <Box visible={false} variant={'1'}>
            <Text my={'4'} size={'6'} weight={'3'}>
              Heading Title
            </Text>
            <Text size={'2'} weight={'2'}>
              Some note or something
            </Text>
            <Text my={'3'}>
              This is a paragraph about my attempt to style some
              pretty standard CSS and HTML. Seems easy but with every
              keystroke there are infinitely more possibilities than
              before. Margin or padding? Max-width or auto spacing? Do
              we make it responsive here? Do we increase size there?
              Its overwhelming at times, which is why I am here. I'm
              going to make good design easy from now on
            </Text>
            <Text my={'3'} size={'5'} weight={'2'}>
              Actual Sub Heading
            </Text>
            <Text my={'3'}>
              This is a paragraph about my attempt to style some
              pretty standard CSS and HTML. Seems easy but with every
              keystroke there are infinitely more possibilities than
              before. Margin or padding? Max-width or auto spacing? Do
              we make it responsive here? Do we increase size there?
              Its overwhelming at times, which is why I am here. I'm
              going to make good design easy from now on
            </Text>
            <Text my={'3'}>
              When a paragraph follows another should it be spaced
              further away or closer than a heading would be? You
              would thing the answer is obvious but sometiems its
              really hard to say.
            </Text>
          </Box>
          <Flex
            align={'center'}
            justify={'center'}
            css={{ width: '$full' }}
          >
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
