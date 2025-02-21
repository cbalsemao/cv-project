import { useRef, useState } from 'react';
import { styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TextSplitter } from '../../../utils/utils';
import { useTextAnimation } from '../../../hooks/useTextAnimation';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { palette } from '../../../utils/styleguide';
import TextFollow from '../../../components/TextFollowAnimation';
import Cursor from '../../../components/Cursor';
import SvgComponent from '../../../components/ValleyAnimationSvg';

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
          paddingLeft: { xs: 2, sm: 10, md: 20, lg: 30, xl: 40 },
          paddingRight: { xs: 2, sm: 10, md: 20, lg: 30, xl: 40 },
          paddingTop: { xs: 5, sm: 5, md: 5, lg: 10, xl: 10 },
        }}
      >
        <StyledSectionTitle>
          <TextSplitter text={'about me'} className={'section__title__char'} />
        </StyledSectionTitle>

        <Typography
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          sx={{ overflow: 'hidden', zIndex: 2000, position: 'relative' }}
        >
          <TextFollow textToAnimate="I am a Frontend Developer with a passion for creating interactive and dynamic user experiences. I specialize in React ." />
        </Typography>
        <Cursor isHovered={isHovered} />
      </Grid>
      <SvgComponent />
    </IntroContainer>
  );
};

export default AboutMeSection;
