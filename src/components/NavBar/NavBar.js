import NavLink from './NavLink';
import { Center } from '@chakra-ui/react';

function NavBar() {

  return (
    <Center fontSize="xl" mt="1rem">
      <NavLink link='#about'>About Me</NavLink>
      <NavLink link='#projects'>Projects</NavLink>
      <NavLink external={true}
        link='https://www.github.com/gadyerg'
      >
      Github</NavLink>
      <NavLink link='mailto: gadyerg@gmail.com' external={true}>Contact</NavLink>
    </Center>
  );
}

export default NavBar;
