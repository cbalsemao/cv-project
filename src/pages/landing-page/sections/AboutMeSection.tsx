import { useRef } from 'react';
import { Box, keyframes, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TextSplitter } from '../../../utils/utils';
import { useTextAnimation } from '../../../hooks/useTextAnimation';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { palette } from '../../../utils/styleguide';
import TextFollow from '../../../components/TextFollowAnimation';

const slideAnimation = keyframes`
  0% {
    transform: translateX(-20%);
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
  backgroundColor: palette.black,
  overflow: 'hidden',
  width: '100%',
});

const AboutMeSection = () => {
  const aboutRef = useRef<HTMLInputElement>(null);
  useTextAnimation(aboutRef, '.section__title__char', 'top center');

  return (
    <IntroContainer
      container
      ref={aboutRef}
      id="about-me"
      sx={{
        paddingLeft: { xs: 2, sm: 10, md: 20, lg: 30, xl: 40 },
        paddingRight: { xs: 2, sm: 10, md: 20, lg: 30, xl: 40 },
      }}
    >
      <Grid size={12}>
        <StyledSectionTitle>
          <TextSplitter text={'about me.'} className={'section__title__char'} />
        </StyledSectionTitle>

        <Typography>
          <TextFollow textToAnimate="I am a Frontend Developer with a passion for creating interactive and dynamic user experiences. I specialize in React ." />
        </Typography>
      </Grid>
    </IntroContainer>
  );
};

export default AboutMeSection;
