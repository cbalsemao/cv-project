import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRef } from 'react';
import { TextSplitter } from '../../../utils/utils';
import { ButtonOpenCV } from '../../../components/ButtonOpenCV';
import { useTitleAnimation } from '../../../hooks/useTitleAnimation';

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
  useTitleAnimation(sectionRef, '.section__title__char');

  return (
    <IntroTextContainer ref={sectionRef} container>
      <Box>
        <IntroNameTextTypography>
          <TextSplitter
            text={"Hi, I'm Camila."}
            className={'section__title__char'}
          />
        </IntroNameTextTypography>
        <IntroGreetingTextTypography>
          <TextSplitter
            text={'Welcome to my portfolio!'}
            className={'section__title__char'}
          />
        </IntroGreetingTextTypography>
        <ButtonOpenCV />
      </Box>
    </IntroTextContainer>
  );
};

export default IntroSection;
