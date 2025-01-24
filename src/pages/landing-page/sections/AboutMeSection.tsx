import { useLayoutEffect, useRef } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import gsap from 'gsap';
import { TextSplitter } from '../../../utils/utils';

const IntroContainer = styled(Grid)({
  height: '100vh',
  color: 'white',
  backgroundColor: 'black',
  padding: 5,
});

const AboutMeSection = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText();
        }
      });
    };

    const animateText = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          const charElements = document.querySelectorAll(
            '.section__title--3 .section__title__char'
          );
          charElements.forEach((el) => {
            gsap.to(el, {
              yPercent: 0,
              ease: 'power2.out',
              duration: 0.5,
            });
          });
        },
      });

      const charElements = document.querySelectorAll(
        '.section__title--3 .section__title__char'
      );
      charElements.forEach((el, i) => {
        gsap.set(el, {
          yPercent: i % 2 === 0 ? -100 : 0,
        });
        tl.to(
          el,
          {
            ease: 'power2.inOut',
            yPercent: i % 2 === 0 ? 0 : -100,
            duration: 1.5,
          },
          `<0.05`
        );
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <IntroContainer container ref={aboutRef}>
      <Grid size={12} sx={{ padding: 10 }} className="section">
        <Typography
          className="section__title section__title--3"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '2rem',
              sm: '3rem',
              md: '4rem',
              lg: '10rem',
            },
            overflow: 'visible',
            display: 'flex',
            height: 'calc(2.5rem * 1.5)',
          }}
        >
          <TextSplitter text={'about me.'} />
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{ display: 'flex', gap: 20, padding: 10, paddingTop: 0 }}
        justifyContent={'start'}
        alignItems={'start'}
      >
        <Box
          sx={{
            backgroundColor: 'gray',
            padding: 5,
            borderRadius: '20px',
          }}
        >
          <Typography variant={'h4'}>
            I am a frontend developer with experience in building web
            applications using React. I have a passion for creating beautiful
            and user-friendly interfaces.
          </Typography>
        </Box>
        <Typography variant={'h4'}>
          I am a frontend developer with experience in building web applications
          using React. I have a passion for creating beautiful and user-friendly
          interfaces.
        </Typography>
      </Grid>
    </IntroContainer>
  );
};

export default AboutMeSection;
