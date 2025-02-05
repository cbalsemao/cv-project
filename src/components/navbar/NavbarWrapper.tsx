import { AppBar, Toolbar } from '@mui/material';
import { ReactNode } from 'react';

export const paddingResponsive = {
  sm: 2,
  md: 5,
  lg: 20,
};

export const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingRight: paddingResponsive,
          paddingLeft: paddingResponsive,

          transition: 'height 0.4s ease',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
};
