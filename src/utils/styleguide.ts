import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Rockwell',
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
  darkWhite: '#f7f4ef',
  black: '#0c0c0c',
  purple: '#680747',
  gray: '#1e1e1e',
  darkPink: '#c3195d',
  red: '#C40233',
  beige: '#b7ab98',
};
