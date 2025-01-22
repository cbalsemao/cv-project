import { Box, Button, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { TextSplitter } from '../../../utils/utils';

const ButtonOpenCV = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Button
      variant="contained"
      onClick={() => navigate('/cv')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        mt: 4,
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: 'black',
        fontSize: '1.2rem',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '120px',
        '&:hover': {
          backgroundColor: 'gray',
        },
      }}
    >
      {hover ? 'open' : 'resume'}
    </Button>
  );
};

const IntroTextContainer = styled(Grid)({
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  height: '100vh',
  width: '100%',
});

const IntroNameTextTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.breakpoints.values.xs ? '2rem' : 'inherit',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
  },
}));

const IntroGreetingTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.values.xs ? '2rem' : 'inherit',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
  },
}));

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && textRef.current) {
          // Trigger animation when the section is in view
          const letters = textRef.current.querySelectorAll(
            '.section__title__char'
          );
          gsap.fromTo(
            letters,
            {
              y: 200,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              ease: 'power4.out',
            }
          );
        }
      },
      { threshold: 1 } // Animation starts when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <IntroTextContainer ref={sectionRef} container>
      <Box ref={textRef}>
        <IntroNameTextTypography>
          <TextSplitter text="Hi, I'm Camila." />
        </IntroNameTextTypography>
        <IntroGreetingTextTypography>
          <TextSplitter text="Welcome to my portfolio!" />
        </IntroGreetingTextTypography>
        <ButtonOpenCV />
      </Box>
    </IntroTextContainer>
  );
};

export default IntroSection;
