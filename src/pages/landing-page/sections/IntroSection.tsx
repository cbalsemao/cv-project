import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRef, useState } from 'react';
import { TextSplitter } from '../../../utils/utils';
import { ButtonOpenCV } from '../../../components/ButtonOpenCV';
import { useTitleAnimation } from '../../../hooks/useTitleAnimation';
import { palette } from '../../../utils/styleguide';
import Cursor from '../../../components/Cursor';
import WaveAnimationSvg from '../../../components/animations-background/WaveAnimationSvg';
import CatGif from '../../../components/CatAnimation';

const IntroTextContainer = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: palette.beige,
  height: '100vh',
  width: '100%',
  backgroundColor: palette.black,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: 'backgroundAnimation 10s infinite alternate',

  '@keyframes backgroundAnimation': {
    '0%': {
      backgroundPosition: 'center',
    },
    '50%': {
      backgroundPosition: 'top',
    },
    '100%': {
      backgroundPosition: 'center',
    },
  },
});

const IntroNameTextTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.breakpoints.values.xs ? '2rem' : 'inherit',
  [theme.breakpoints.up('xs')]: { fontSize: '2rem' },
  [theme.breakpoints.up('sm')]: { fontSize: '3rem' },
  [theme.breakpoints.up('md')]: { fontSize: '4rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '5rem' },
  overflow: 'hidden',
  zIndex: 2000,
  position: 'relative',
}));

const IntroGreetingTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.values.xs ? '2rem' : 'inherit',
  [theme.breakpoints.up('xs')]: { fontSize: '2rem' },
  [theme.breakpoints.up('sm')]: { fontSize: '3rem' },
  [theme.breakpoints.up('md')]: { fontSize: '4rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '5rem' },
  overflow: 'hidden',
  zIndex: 2000,
  position: 'relative',
}));

const IntroSection = () => {
  const sectionRef = useRef(null);
  useTitleAnimation(sectionRef, '.section__title__char');

  const [isHovered, setIsHovered] = useState(false);

  return (
    <IntroTextContainer id={'intro'} ref={sectionRef} container>
      <WaveAnimationSvg />

      <Box>
        <IntroNameTextTypography
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          display="flex"
          alignItems="center"
        >
          <TextSplitter
            text={"Hi, I'm Camila"}
            className={'section__title__char'}
          />
          <CatGif />
        </IntroNameTextTypography>
        <IntroGreetingTextTypography
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <TextSplitter
            text={'Welcome to my portfolio!'}
            className={'section__title__char'}
          />
        </IntroGreetingTextTypography>
        <Cursor isHovered={isHovered} />
        <ButtonOpenCV />
      </Box>
    </IntroTextContainer>
  );
};

export default IntroSection;
