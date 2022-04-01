import { Center, Divider } from '@chakra-ui/react';

function CenterDivider(props) {
  return (
    <Center>
      <Divider
        orientation='horizontal'
        bg={props.color}
        m='.5rem 0'
        w='90%'
        align='center' 
      />
    </Center>
  )
}

export default CenterDivider;
