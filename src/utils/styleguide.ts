import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Century Gothic',
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const palette = {
  white: '#FBFBFB',
  darkWhite: '#F7F9F2',
  black: '#0c0c0c',
  burgundy: '#56021F',
  gray: '#1e1e1e',
  maroon: '#8D0B41',
  red: '#C40233',
  beige: '#b7ab98',
};
