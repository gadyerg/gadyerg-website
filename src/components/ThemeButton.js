import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ThemeButton() {
  const { toggleColorMode, colorMode } = useColorMode();
  const bg = useColorModeValue('dark', 'light');
  const color = useColorModeValue('white', 'black');

  return (
    <Button
      onClick={toggleColorMode}
      w='2.5rem'
      h='2.5rem'
      borderRadius='15%'
      position='fixed'
      bottom='.5rem'
      left='.5rem'
      _focus={{outline: 'none'}}
      _active={{bg: bg}}
      _hover={{bg: bg}}
      bg={bg}
      color={color}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
  )
}

export default ThemeButton;
