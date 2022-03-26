import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('white', '#2d323b')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Roboto, sans-serif',
};

const colors = {
  primary: 'green',
};

const theme = extendTheme({ config, fonts, colors, styles });

export default theme;
