import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ReactNode, RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const ButtonOpenCV = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => navigate('/cv')}
      sx={{
        mt: 4,
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: 'black',
        '&:hover': {
          backgroundColor: 'gray',
        },
        fontSize: '1.2rem',
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      Open CV
    </Button>
  );
};

const IntroTextContainer = ({
  children,
  sectionRef,
}: {
  children: ReactNode;
  sectionRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <Grid
      container
      ref={sectionRef}
      sx={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        height: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Grid>
  );
};

const IntroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && textRef.current) {
          // Trigger animation when the section is in view
          const letters = textRef.current.querySelectorAll('.char');
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
      { threshold: 0.5 } // Animation starts when 50% of the section is visible
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
    <IntroTextContainer sectionRef={sectionRef}>
      <div ref={textRef}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '2rem',
              sm: '3rem',
              md: '4rem',
              lg: '5rem',
            },
          }}
        >
          {'Hi, I am Camila'.split('').map((char, index) => (
            <span key={index} className="char">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '3rem',
              md: '4rem',
              lg: '5rem',
            },
          }}
        >
          {'Welcome to my portfolio!'.split('').map((char, index) => (
            <span key={index} className="char">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </Typography>
        <ButtonOpenCV />
      </div>
    </IntroTextContainer>
  );
};

export default IntroSection;
