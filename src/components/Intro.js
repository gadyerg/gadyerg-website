import { motion } from 'framer-motion';
import { Flex, Container, Heading, Avatar } from '@chakra-ui/react';
import { popUp, imagePopUp } from '../animation/animation';
import avatar from '../lib/avatar.png';

function Intro() {
  const MotionHeading = motion(Heading);
  const MotionContainer = motion(Container);
  const MotionFlex = motion(Flex);
  const MotionAvatar = motion(Avatar)

  return (
    <MotionFlex
      variants={popUp}
      direction="column"
      mt={['4rem', '20rem']}
      ml={['2rem', '10rem']}
      initial="initial"
      animate="fadeIn"
      key="menu"
      height='15rem'
    >
      <MotionHeading
        as='h1'
        fontSize={['3xl', '8xl']}
        variants={popUp}
        m="0"
        lineHeight={['2rem', '6.5rem']}
      >
        Hello, World!
        <br />
        I'm Gadyer Gonzalez.
      </MotionHeading>
      <MotionContainer
        as="i"
        fontSize="2xl"
        variants={popUp}
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
        size={['xs', '20px']}
        m={['0 auto', '0']}
        mt={['5rem', '0']}
        alignSelf={['center', 'flex-end']}
        bottom={['0rem', '25rem']}
        right={['1rem', '15rem']}
      />
    </MotionFlex>
  );
}

export default Intro;
