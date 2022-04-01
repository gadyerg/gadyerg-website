import { Heading, Flex, Image, Box, Text, useColorModeValue, Link } from '@chakra-ui/react';
import CenterDivider from './CenterDivider';

function Project(props) {
  const bg = useColorModeValue('dark', 'light');
  const color = useColorModeValue('white', 'black');

  return (
    <Flex
      direction='column'
      borderRadius='.6rem'
      bg={bg}
      color={color}
    >
      <Image
        src={props.link}
        borderTopRadius='.6rem' 
        h='20rem'
        w='30rem'
      />
      <Heading as='h3' align='center' mt='.5rem'>{props.title}</Heading>
      <CenterDivider color={color} />
      <Link
        fontSize='xl'
        ml='5%'
        href='http://www.google.com'
        isExternal
        _focus={{outline: 'none'}}
      >
      Source Code</Link>
      <CenterDivider color={color} />
      <Text ml='5%' fontSize='xl'>Hello something somethin</Text>
    </Flex>
  )
}

export default Project;
