import { useMediaQuery } from '@mui/material';
import { theme } from '../utils/styleguide';

export const useViewPort = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'xl'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dynamicHeight = () => {
    switch (true) {
      case isDesktop:
        return '700px';
      case isTablet:
        return '500px';
      case isMobile:
        return '300px';
      default:
        return '800px';
    }
  };

  const dynamicPadding = () => {
    switch (true) {
      case isDesktop:
        return 40;
      case isTablet:
        return 30;
      case isMobile:
        return 10;
      default:
        return 40;
    }
  };

  return { isDesktop, isTablet, isMobile, dynamicHeight, dynamicPadding };
};
