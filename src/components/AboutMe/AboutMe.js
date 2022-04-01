import { Container, Text, Heading, Flex } from '@chakra-ui/react';
import Collage from './Collage';
import { motion } from 'framer-motion';
import { popUp } from '../../animation/animation';
import Technologies from './Technologies';

function AboutMe() {
  const MotionContainer = motion(Container);

  return (
    <Flex
      direction={['column', 'row']}
      justify='space-between'
      mt='25rem'
      id='about'
    >
      <MotionContainer
        variants={popUp}
        initial='initial'
        whileInView='fadeIn'
        m='0'
        ml={['0rem', '10rem']}
        pr='0'
      >
        <Heading
          as='h2'
          fontSize='6xl'
        >
        About Me:</Heading>
        <Text
          fontSize='2xl'
          m={['.5rem 0', '2rem 0']}>
          I am a Full-Stack Developer located in Phoenix, AZ. I focus on building well rounded and complete web applications.
        </Text>
        <Technologies />
      </MotionContainer>
      <Collage />
    </Flex>
  )
}

export default AboutMe;
