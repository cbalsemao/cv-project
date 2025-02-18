import { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { formattedId, PAGES_NAMES } from '../../utils/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonDesktopNavbar } from './navbar-styles/ButtonDesktopNavbar';
import { palette, theme } from '../../utils/styleguide';

import ContactIcons from '../ContactIcons';

const DesktopMenuStyled = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  justifyContent: 'flex-end',
  paddingRight: '20px',
});

const ContainerButtonsDeskMenu = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '15px 30px',
  minWidth: '250px',
  minHeight: '60px',
  borderRadius: '15px',
});

gsap.registerPlugin(ScrollTrigger);

type DesktopMenuProps = {
  handleScroll: (sectionId: string) => void;
};

const ButtonSectionNavbar = ({
  page,
  onNavItemHandler,
  isActive,
}: {
  page: string;
  onNavItemHandler: (page: string) => void;
  isActive: boolean;
}) => {
  return (
    <ButtonDesktopNavbar
      key={page}
      onClick={() => onNavItemHandler(page)}
      sx={{
        color: isActive ? palette.darkPink : palette.beige,
        fontWeight: 'bold',
        transition: 'color 0.3s ease-in-out',
        fontFamily: theme.typography.fontFamily,
        padding: 2,
      }}
    >
      {page}
    </ButtonDesktopNavbar>
  );
};

export const DesktopMenu = ({ handleScroll }: DesktopMenuProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    PAGES_NAMES.forEach((page, index) => {
      ScrollTrigger.create({
        trigger: `#${formattedId(page)}`,
        onEnter: () => setActiveSection(page),
        onEnterBack: () => setActiveSection(page),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const onNavItemHandler = (page: string) => {
    handleScroll(formattedId(page));
  };

  return (
    <DesktopMenuStyled>
      <ContainerButtonsDeskMenu>
        {PAGES_NAMES.map((page) => (
          <ButtonSectionNavbar
            key={page}
            page={page}
            onNavItemHandler={onNavItemHandler}
            isActive={activeSection === page}
          />
        ))}
      </ContainerButtonsDeskMenu>
      <ContactIcons />
    </DesktopMenuStyled>
  );
};
