import { useViewPort } from '../../hooks/useViewport';
import { NavbarWrapper } from './NavbarWrapper';
import MobileMenu from './MobileMenu';
import { Box } from '@mui/material';
import { getOffsetBySectionId, handleScrollTo } from '../../utils/utils';
import { useState } from 'react';
import { DesktopMenu } from './DesktopMenu';

const Navbar = () => {
  const { isDesktop, isTablet } = useViewPort();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const topOffsetPosition = getOffsetBySectionId(sectionId);
    handleScrollTo(topOffsetPosition.top);
    setDrawerOpen(false);
  };

  const commonMenuProps = {
    handleScroll,
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <NavbarWrapper>
        {isTablet || isDesktop ? (
          <DesktopMenu {...commonMenuProps} />
        ) : (
          <Box
            sx={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}
          >
            <MobileMenu
              {...commonMenuProps}
              drawerOpen={drawerOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
        )}
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
