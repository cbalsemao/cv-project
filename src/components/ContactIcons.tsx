import { Box, styled, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { palette } from '../utils/styleguide';

const ContactIconsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        position: { xs: 'fixed', md: 'fixed' },
        bottom: { xs: '20px', md: 'auto' },
        top: { xs: 'auto', md: '50%' },
        left: { xs: '50%', md: '20px' },
        transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: '20px',
        paddingLeft: { xs: '0', md: '20px' },
        alignItems: { xs: 'center', md: 'flex-start' },
        marginTop: { xs: '0', md: '0' },
        color: { xs: palette.white, md: palette.beige },
      }}
    >
      {children}
    </Box>
  );
};

const TypographyIcon = styled(Typography)({
  fontWeight: 'bold',
});

const ContactIcons = () => {
  const githubRef = useRef<HTMLDivElement | null>(null);
  const linkedinRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent,
      iconRef: React.RefObject<HTMLDivElement>
    ) => {
      if (!iconRef.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } =
        iconRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 1;
      const y = (clientY - (top + height / 2)) * 1;

      gsap.to(iconRef.current, {
        x: x,
        y: y,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = (iconRef: React.RefObject<HTMLDivElement>) => {
      if (!iconRef.current) return;

      gsap.to(iconRef.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    };

    [githubRef, linkedinRef].forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener('mousemove', (e) =>
          handleMouseMove(e, ref)
        );
        ref.current.addEventListener('mouseleave', () => handleMouseLeave(ref));
      }
    });
  }, []);

  return (
    <ContactIconsContainer>
      <TypographyIcon
        variant="h6"
        ref={githubRef}
        sx={{
          '&:hover': {
            color: palette.darkWhite,
          },
        }}
      >
        <GitHubIcon
          sx={{ fontSize: 40 }}
          onClick={() => window.open('https://github.com/cbalsemao', '_blank')}
        />
      </TypographyIcon>
      <TypographyIcon
        variant="h6"
        ref={linkedinRef}
        sx={{
          '&:hover': {
            color: palette.darkWhite,
          },
        }}
      >
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </TypographyIcon>
    </ContactIconsContainer>
  );
};

export default ContactIcons;
