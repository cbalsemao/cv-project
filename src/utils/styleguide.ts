import styled from '@emotion/styled';
import { createTheme } from '@mui/material';

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography: {
    fontFamily: 'PT Serif',

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
  lightPurple: '#cdb5d9',
  darkPurple: '#5e3183',
  purple: '#8c6ca6',
  darkGreen: '#2b5b2e',
  green: '#94ac6c',
  lightGreen: '#e0e6d7',
  black: '#000000',
};

export const sectionStyle = {
  height: 'auto',
  transition: 'height 0.5s',
};
