import { Heading, Text, Box, Link, Flex, useColorModeValue } from '@chakra-ui/react';

function Contact() {
  const bc = useColorModeValue('dark', 'light');

  return (
      <Flex direction='column' align='center' mb='2rem' id='contact'>
        <Heading>Get In Touch:</Heading>
        <Text fontSize='2xl'>
          Feel free to contact me if you have anything to discuss. 
          <br />
          I look forward to working with you!
        </Text>
        <Link
          mt='.5rem'
          href='mailto: gadyerg@gmail.com'
          _hover={{textDecoration: 'none'}}
          _focus={{outline: 'none'}}
        >
          <Box
            fontSize='xl'
            alignSelf='center'
            variant='ghost'
            bg='inheri'
            borderWidth='2px'
            borderStyle='solid'
            borderColor={bc}
            padding='0 1rem'
            borderRadius='.3rem'
          >
          Contact Me</Box>
        </Link>
      </Flex>
  )
}

export default Contact;
