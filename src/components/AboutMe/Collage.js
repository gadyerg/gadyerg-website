import { Grid, GridItem, Image } from '@chakra-ui/react';
import { spin } from '../../animation/animation';
import { motion } from 'framer-motion';
import CSS from '../../lib/CSS.svg';
import HTML from '../../lib/HTML.svg';
import JS from '../../lib/JS.svg';
import Node from '../../lib/Node.svg';
import React from '../../lib/React.svg';

function Collage() {
  const Svgs = [CSS, HTML, JS, Node, React];
  const MotionGrid = motion(Grid);
  const MotionImage = motion(Image);

  return (
    <MotionGrid
      variants={spin}
      animate='spin'
      w={['20rem', '45rem']}
      h={['10rem', '30rem']}
      m={['2rem 0', '0rem']}
      templateColumns='repeat(3, 1fr)'
      templateRows='repeat(3, 1fr)'
      gap={4}
    >
      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={1}
        rowEnd={2}
      >
        <MotionImage
          variants={spin}
          animate='spinSmall'
          m='auto'
          src={HTML}
          w={['5rem', '6.5rem']}
        />
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={2}
        rowEnd={3}
      >
        <MotionImage
          variants={spin}
          animate='spinSmall'
          ml='6rem'
          src={CSS}
          w={['5rem', '8rem']}
        />
      </GridItem>
      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={2}
        rowEnd={3}
      >
        <MotionImage
          variants={spin}
          animate='spinSmall'
          m='auto'
          src={JS}
          w={['5rem', '8rem']}
        />
      </GridItem>
      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={3}
        rowEnd={4}
      >
        <MotionImage
          variants={spin}
          animate='spinSmall'
          m='auto'
          src={Node}
          w={['5rem', '8rem']}
        />
      </GridItem>
      <GridItem
        colStart={3}
        colEnd={4}
        rowStart={2}
        rowEnd={3}
      >
        <MotionImage
          variants={spin}
          animate='spinSmall'
          m='0'
          src={React}
          w={['5rem', '8rem']}
        />
      </GridItem>
    </MotionGrid>
  )
}

export default Collage;
