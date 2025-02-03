// ProjectsSection.tsx
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
  const projectsRef = useRef<HTMLInputElement>(null);
  useTextAnimation(
    projectsRef,
    '.section__title__char',
    'left 100%',
    'bottom 100%'
  );

  return (
    <IntroContainer container ref={projectsRef}>
      <StyledSectionTitle>
        <TextSplitter text={'projects.'} className={'section__title__char'} />
      </StyledSectionTitle>
    </IntroContainer>
  );
};

export default ProjectsSection;
