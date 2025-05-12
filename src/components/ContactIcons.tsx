import { Box, styled, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { palette } from '../utils/styleguide';

const ContactIconsContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  gap: '20px',
  zIndex: 1000,
  [theme.breakpoints.up('md')]: {
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('md')]: {
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    flexDirection: 'row',
  },
}));

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
        onClick={() =>
          window.open('https://www.linkedin.com/in/camila-balsemao/', '_blank')
        }
        sx={{
          '&:hover': {
            color: palette.darkWhite,
          },
        }}
      >
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </TypographyIcon>
      {/* <TypographyIcon
        variant="h6"
        ref={emailRef}
        sx={{
          '&:hover': {
            color: palette.darkWhite || '#ffffff', // Fallback to white if undefined
          },
        }}
      >
        <a
          href="mailto:cbalsemaod@gmail.com"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <EmailIcon sx={{ fontSize: 40 }} />
        </a>
      </TypographyIcon> */}
    </ContactIconsContainer>
  );
};

export default ContactIcons;
