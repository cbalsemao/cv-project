import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextSplitter } from '../../../utils/utils';
import { ButtonOpenCV } from '../../../components/ButtonOpenCV';

gsap.registerPlugin(ScrollTrigger);

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
  [theme.breakpoints.up('xs')]: { fontSize: '2rem' },
  [theme.breakpoints.up('sm')]: { fontSize: '3rem' },
  [theme.breakpoints.up('md')]: { fontSize: '4rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '5rem' },
  overflow: 'hidden',
}));

const IntroGreetingTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.values.xs ? '2rem' : 'inherit',
  [theme.breakpoints.up('xs')]: { fontSize: '2rem' },
  [theme.breakpoints.up('sm')]: { fontSize: '3rem' },
  [theme.breakpoints.up('md')]: { fontSize: '4rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '5rem' },
  overflow: 'hidden',
}));

const IntroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray('.section__title__char');

      gsap.set(letters, { y: 100, opacity: 0 });

      const animation = gsap.to(letters, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: 'power4.out',
        duration: 1.2,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%', // Starts when 75% of the section is in view
        end: 'bottom top', // Ends when the section leaves
        toggleActions: 'restart none none none', // Restart animation every time
        onEnter: () => {
          animation.restart();
        },
        onLeave: () => {
          animation.pause().progress(0); // Reset animation when leaving
        },
        onEnterBack: () => {
          animation.restart(); // Restart when coming back into view
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert(); // Cleanup when component unmounts
  }, []);

  return (
    <IntroTextContainer ref={sectionRef} container>
      <Box>
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
