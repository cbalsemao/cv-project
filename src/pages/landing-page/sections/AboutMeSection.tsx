import { useRef, useState } from 'react';
import { styled, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TextSplitter } from '../../../utils/utils';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { palette } from '../../../utils/styleguide';
import Cursor from '../../../components/Cursor';
import TextFollow from '../../../components/animations/TextFollowAnimation';
import ValleyAnimationSvg from '../../../components/animations-background/ValleyAnimationSvg';
import useTextAnimation from '../../../hooks/useTextAnimation';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <IntroContainer container ref={aboutRef} id="about-me">
      <Grid
        sx={{
          paddingLeft: { xs: 2, sm: 10, md: 15, lg: 20, xl: 30 },
          paddingRight: { xs: 2, sm: 10, md: 15, lg: 20, xl: 30 },
          paddingTop: { xs: 5, sm: 5, md: 5, lg: 10, xl: 10 },
        }}
      >
        <StyledSectionTitle>
          <TextSplitter text={'about me'} className={'section__title__char'} />
        </StyledSectionTitle>

        <Box
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          sx={{ overflow: 'hidden', zIndex: 2000, position: 'relative' }}
        >
          <TextFollow textToAnimate="I’m a frontend developer with a background in software testing, which sharpened my attention to detail. I build dynamic, user-friendly interfaces with React, focusing on usability and clean design." />
        </Box>
        <Cursor isHovered={isHovered} />
      </Grid>
      <ValleyAnimationSvg />
    </IntroContainer>
  );
};

export default AboutMeSection;
