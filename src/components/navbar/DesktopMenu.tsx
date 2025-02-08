import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { formattedId, PAGES_NAMES } from '../../utils/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonDesktopNavbar } from './navbar-styles/ButtonDesktopNavbar';

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
        color: isActive ? 'purple' : 'white',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'color 0.3s ease-in-out',
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
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        justifyContent: 'flex-end',
        paddingRight: '20px',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '2px solid white',
          padding: '15px 30px',
          minWidth: '250px',
          minHeight: '60px',
          borderRadius: '15px',
        }}
      >
        {PAGES_NAMES.map((page) => (
          <ButtonSectionNavbar
            key={page}
            page={page}
            onNavItemHandler={onNavItemHandler}
            isActive={activeSection === page}
          />
        ))}
      </Box>
    </Box>
  );
};
