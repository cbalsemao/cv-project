import Grid from '@mui/material/Grid2';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import { styled } from '@mui/material';
import { useTextAnimation } from '../../../hooks/useTextAnimation';
import { useRef } from 'react';
import { palette } from '../../../utils/styleguide';

const IntroContainer = styled(Grid)({
  height: '100vh',
  color: 'white',
  backgroundColor: palette.black,
  padding: 5,
  overflow: 'hidden',
  width: '100vw',
});

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLInputElement>(null);
  useTextAnimation(projectsRef, '.section__title__char', 'top right');

  return (
    <IntroContainer
      // className="scroll-section-projects"
      ref={projectsRef}
      id="projects"
    >
      <Grid size={12}>
        <StyledSectionTitle>
          <TextSplitter text={'projects.'} className={'section__title__char'} />
        </StyledSectionTitle>
      </Grid>
    </IntroContainer>
  );
};

export default ProjectsSection;
