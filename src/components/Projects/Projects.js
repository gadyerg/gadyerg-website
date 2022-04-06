import { Flex, Heading, Box } from '@chakra-ui/react';
import Project from './Project';
import MusicPlayerScreenShot from '../../lib/MusicPlayerScreenShot.png';

function Projects() {
  return (
    <Box
      mt={['10rem', '20rem']}
      id='projects'
    >
      <Heading
        as='h2'
        fontSize='6xl'
        ml={['1rem', '10rem']}
      >
      Projects:</Heading>
      <Flex
        justify='center'
      >
        <Project
          title='Music Player'
          link={MusicPlayerScreenShot}>
          This is a full stack application. It allows you to make an account to upload your music to and listen to it.
        </Project>
      </Flex>
    </Box>
  )
}

export default Projects;
