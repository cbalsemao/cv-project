import { styled, Typography } from '@mui/material';

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  overflow: 'visible',
  display: 'flex',
  height: 'calc(2.5rem * 1.5)',
  color: 'darkgray',

  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '10rem',
  },
}));
