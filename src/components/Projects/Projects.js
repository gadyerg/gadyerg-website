import { Flex, Heading, Box } from '@chakra-ui/react';
import Project from './Project';

function Projects() {
  return (
    <Box mt='20rem' id='projects'>
      <Heading
        as='h2'
        fontSize='6xl'
        ml='10rem'
      >
      Projects:</Heading>
      <Flex
        justify='center'
      >
        <Project
          title='Music Player'
          link='https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg'/>
      </Flex>
    </Box>
  )
}

export default Projects;
