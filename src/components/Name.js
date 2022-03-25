import { motion } from 'framer-motion';
import { Flex, Container } from '@chakra-ui/react';
import { nameEnter } from '../animation/animation';

function Name() {
  const MotionContainer = motion(Container);
  const MotionFlex = motion(Flex);

  return (
    <MotionFlex
      variants={nameEnter}
      direction="column"
      mt="15rem"
      ml="10rem"
      initial="initial"
      animate="fadeIn"
      key="menu"
    >
      <MotionContainer
        fontSize="8xl"
        variants={nameEnter}
        m="0"
        lineHeight="6.5rem"
      >
        Hello, World!
        <br />
        I'm Gadyer Gonzalez.
      </MotionContainer>
      <MotionContainer
        as="i"
        fontSize="2xl"
        variants={nameEnter}
        pl="1.5rem"
        m="0"
        color="gray"
      >
        Full Stack Developer
      </MotionContainer>
    </MotionFlex>
  );
}

export default Name;
