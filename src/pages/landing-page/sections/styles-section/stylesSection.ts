import { styled, Typography } from '@mui/material';
import { palette } from '../../../../utils/styleguide';

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  display: 'flex',
  paddingTop: '10rem',
  color: palette.beige,
  textTransform: 'uppercase',
  zIndex: 2000,
  position: 'relative',

  [theme.breakpoints.up('xs')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.0rem',
  },
}));
