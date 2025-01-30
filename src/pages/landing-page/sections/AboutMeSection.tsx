import { useRef } from 'react';
import { Box, keyframes, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TextSplitter } from '../../../utils/utils';
import { useTextAnimation } from '../../../hooks/useTextAnimation';
import { StyledSectionTitle } from '../../../styled-components/stylesSection';

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

const AboutMeSection = () => {
  const aboutRef = useRef<HTMLInputElement>(null);
  useTextAnimation(aboutRef, '.section__title__char');

  return (
    <IntroContainer container ref={aboutRef}>
      <Grid size={12} sx={{ padding: 10 }}>
        <StyledSectionTitle>
          <TextSplitter text={'about me.'} className={'section__title__char'} />
        </StyledSectionTitle>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: 'f</IntroContainer>lex',
          gap: 20,
          padding: 10,
          paddingTop: 0,
        }}
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
            src="/public/html-logo.png"
            alt="About me image"
            className="html-logo"
          />
          <img
            src="/public/css-logo.png"
            alt="About me image"
            className="css-logo"
          />
          <img
            src="/public/typescript-logo.png"
            alt="About me image"
            className="ts-logo"
          />
          <img
            src="/public/react-logo.png"
            alt="About me image"
            className="react-logo"
          />
          <img
            src="/public/redux-logo.png"
            alt="About me image"
            className="redux-logo"
          />
        </AnimatedLogoContainer>
      </Grid>
    </IntroContainer>
  );
};

export default AboutMeSection;
