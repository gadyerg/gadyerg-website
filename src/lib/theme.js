import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: mode('light', 'dark')(props),
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
  light: '#fae2ca',
  dark: '#2d323b',
  primary: 'green',
};

const theme = extendTheme({ config, fonts, colors, styles });

export default theme;
