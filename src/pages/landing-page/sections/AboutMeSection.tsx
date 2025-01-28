import { useEffect, useRef } from 'react';
import { Box, keyframes, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextSplitter } from '../../../utils/utils';

gsap.registerPlugin(ScrollTrigger);

const slideAnimation = keyframes`
  0% {
    left:  translateX(-20%);
  }
  
  100% {
    transform: translateX(170%);
  }
`;

const AnimatedLogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: 50,
  animation: ` ${slideAnimation} 7s linear infinite`,
  overflow: 'hidden',
  img: {
    marginRight: '100px',
    borderRadius: '20px',
    width: '100px',
    height: '100px',
  },
});

const IntroContainer = styled(Grid)({
  height: '100vh',
  color: 'white',
  backgroundColor: 'black',
  padding: 5,
  overflow: 'hidden',
});

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  overflow: 'visible',
  display: 'flex',
  height: 'calc(2.5rem * 1.5)',
  color: 'darkgray',

  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '10rem',
  },
}));

const AboutMeSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const charElements = gsap.utils.toArray('.section__title__char');

      gsap.set(charElements, {
        yPercent: (i) => (i % 2 === 0 ? -100 : 0),
        opacity: 0,
      });

      // Create animation for the letters
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 50%',
            end: 'top 0%',
            toggleActions: 'play reverse play reverse',
          },
        })
        .to(charElements, {
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 1.5,
          stagger: 0.05,
        });
    }, aboutRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <IntroContainer container ref={aboutRef}>
      <Grid size={12} sx={{ padding: 10 }} className="section">
        <StyledSectionTitle className="section__title section__title--3">
          <TextSplitter text={'about me.'} />
        </StyledSectionTitle>
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
          <Typography variant={'h6'}>
            I am a frontend developer with experience in building web
            applications using React. I have a passion for creating beautiful
            and user-friendly interfaces.
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: 'flex',
          gap: 20,
          padding: 10,
          paddingTop: 0,
          left: '-60%',
          position: 'relative',
        }}
        justifyContent={'start'}
        alignItems={'start'}
      >
        <AnimatedLogoContainer>
          <img
            src="/public/typescriptLogo.png"
            alt="About me image"
            className="ts-logo"
          />
          <img
            src="/public/reactLogo.png"
            alt="About me image"
            className="react-logo"
          />
          <img
            src="/public/reactLogo.png"
            alt="About me image"
            className="react-logo"
          />
          <img
            src="/public/reactLogo.png"
            alt="About me image"
            className="react-logo"
          />
        </AnimatedLogoContainer>
      </Grid>
    </IntroContainer>
  );
};

export default AboutMeSection;
