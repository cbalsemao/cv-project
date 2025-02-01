import Grid from '@mui/material/Grid2';
import { StyledSectionTitle } from '../../../styled-components/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import { styled } from '@mui/material';
import { useTextAnimation } from '../../../hooks/useTextAnimation';
import { useRef } from 'react';

const IntroContainer = styled(Grid)({
  height: '100vh',
  color: 'white',
  backgroundColor: 'black',
  padding: 5,
  overflow: 'hidden',
  width: '100%',
});

const ProjectsSection = () => {
  const aboutRef = useRef<HTMLInputElement>(null);
  useTextAnimation(aboutRef, '.section__title__char');

  return (
    <IntroContainer container ref={aboutRef}>
      <Grid size={12} sx={{ padding: 10 }}>
        <StyledSectionTitle>
          {/* <TextSplitter text={'projects.'} className={'section__title__char'} /> */}
          <h1>projects.</h1>
        </StyledSectionTitle>
      </Grid>
    </IntroContainer>
  );
};

export default ProjectsSection;
