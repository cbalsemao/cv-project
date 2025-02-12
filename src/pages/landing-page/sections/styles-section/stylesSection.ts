import { styled, Typography } from '@mui/material';
import { palette } from '../../../../utils/styleguide';

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  overflow: 'visible',
  display: 'flex',
  height: 'calc(2.5rem * 1.5)',
  paddingTop: '5rem',
  color: palette.purple,

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
