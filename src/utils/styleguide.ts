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
  darkWhite: '#F4CCE9',
  black: '#0c0c0c',
  purple: '#56021F',
  gray: '#1e1e1e',
  darkPink: '#7D1C4A',
  red: '#C40233',
  beige: '#b7ab98',
};
