import { Flex, Image } from '@chakra-ui/react';
import CSS from '../../lib/CSS.svg';
import HTML from '../../lib/HTML.svg';
import JS from '../../lib/JS.svg';
import Node from '../../lib/Node.svg';
import React from '../../lib/React.svg';

function Collage() {
  const Svgs = [CSS, HTML, JS, Node, React];

  return (
    <Flex
      w={['20rem', '40rem']}
      h={['10rem', '25rem']}
      wrap='wrap'
      m={['2rem 0', '0rem']}
    >
      {Svgs.map((Svg) => {
        return <Image src={Svg} w={['5rem', '10rem']}/>
      })}
    </Flex>
  )
}

export default Collage;
