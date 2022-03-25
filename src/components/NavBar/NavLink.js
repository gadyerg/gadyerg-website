import { Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { navHover } from '../../animation/animation';

function NavLink(props) {
  const MotionLink = motion(Link);

  const hover = { textDecoration: 'none' }

  return (
    <MotionLink
      href={props.link}
      pr="1rem"
      initial="initial"
      whileHover="hover"
      variants={navHover}
      _hover={hover}
      _focus={{boxShadow: 'none'}}
      isExternal={props.external}
    >
    {props.children}
    </MotionLink>
  )
}

export default NavLink;
