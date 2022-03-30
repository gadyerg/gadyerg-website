import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    html: {
      overflowX: 'hidden',
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
};

const breakpoints = {
  mobile: '480px'
}

const theme = extendTheme({ config, fonts, colors, styles, breakpoints });

export default theme;
