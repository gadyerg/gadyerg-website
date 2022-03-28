import { Container, Text, Heading } from '@chakra-ui/react';

function AboutMe() {
  return (
    <Container m='0' ml='10rem' mt='30rem' id='about'>
      <Heading as='h2' fontSize='6xl'>About Me:</Heading>
      <Text fontSize='xl' m='2rem 0'>
        I am a Full-Stack Developer located in Phoenix, AZ. I focus on building well rounded and complete web applications.
      </Text>
    </Container>
  )
}

export default AboutMe;
