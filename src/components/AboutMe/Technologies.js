import { Heading, UnorderedList, ListItem, Box, SimpleGrid } from '@chakra-ui/react';

function Technologies() {
  return (
    <Box m={['2rem 0', '0']}>
      <Heading as='h2'>Technologies: </Heading>
      <UnorderedList
        mt='.6rem'
        fontSize='xl'
        w={['92%', '25rem']}
      >
        <SimpleGrid
          columns='2'
          spacingX={['0', '0rem']}
        >
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Javascrip</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>React</ListItem>
        </SimpleGrid>
      </UnorderedList>
    </Box>
  )
}

export default Technologies;
