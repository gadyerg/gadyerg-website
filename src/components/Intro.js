import { motion } from 'framer-motion';
import { Flex, Container, Heading, Avatar, ScaleFade  } from '@chakra-ui/react';
import { nameEnter, imagePopUp } from '../animation/animation';
import avatar from '../lib/avatar.png';

function Intro() {
  const MotionHeading = motion(Heading);
  const MotionContainer = motion(Container);
  const MotionFlex = motion(Flex);
  const MotionAvatar = motion(Avatar)

  return (
    <MotionFlex
      variants={nameEnter}
      direction="column"
      mt="20rem"
      ml="10rem"
      initial="initial"
      animate="fadeIn"
      key="menu"
      height='15rem'
    >
      <MotionHeading
        as='h1'
        fontSize="8xl"
        variants={nameEnter}
        m="0"
        lineHeight="6.5rem"
      >
        Hello, World!
        <br />
        I'm Gadyer Gonzalez.
      </MotionHeading>
      <MotionContainer
        as="i"
        fontSize="2xl"
        variants={nameEnter}
        p='0'
        m="0"
        color="gray"
      >
        Full Stack Developer
      </MotionContainer>
      <MotionAvatar
        variants={imagePopUp}
        initial='initial'
        animate='popUp'
        src={avatar}
        size='20px'
        alignSelf='flex-end'
        position='relative'
        bottom='25rem'
        right='15rem'
      />
    </MotionFlex>
  );
}

export default Intro;
