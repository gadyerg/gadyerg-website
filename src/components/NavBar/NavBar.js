import NavLink from './NavLink';
import { Link, Center } from '@chakra-ui/react';

function NavBar() {

  return (
    <Center fontSize="xl" mt="1rem">
      <NavLink>About Me</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink external={true}
        link='https://www.github.com/gadyerg/gadyerg-website'
      >
      Github</NavLink>
      <NavLink>Contact</NavLink>
    </Center>
  );
}

export default NavBar;
