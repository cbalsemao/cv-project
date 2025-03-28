import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { useRef } from 'react';
import { palette, theme } from '../../../utils/styleguide';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useTextAnimation from '../../../hooks/useTextAnimation';
import { PROJECTS_INITIAL } from '../../../utils/types';

const ArrowStyled = styled(ArrowRightAltIcon)({
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  transformOrigin: 'left center',
  fontSize: '3.2rem',
});

const GlobalStyles = styled('style')`
  @keyframes stretchArrow {
    0% {
      transform: scaleX(1);
    }
    25% {
      transform: scaleX(1.3);
    }
    50% {
      transform: scaleX(1);
    }
    75% {
      transform: scaleX(1.3);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

const projects = [
  {
    id: 1,
    name: 'The Hangman',
    image: './hangman-proj-img.png',
    description: 'The famous game of the hangman',
    url: 'https://hangman-game-topaz-phi.vercel.app/',
  },
  {
    id: 2,
    name: 'Art Shop',
    image:
      'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
    description: 'E-commerce de arte',
  },

  {
    id: 3,
    name: 'TODO list',
    image:
      'https://cdn.theatlantic.com/thumbor/yHhIvkBiGvKKubxVHTNXvU4nCKQ=/1x122:2554x1452/1200x625/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
    description: 'A simple todoList',
  },
  {
    id: 4,
    name: 'Memory Store',
    image:
      'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
    description: 'Application to save your memories',
  },
  {
    id: 5,
    name: 'Clover Laundry',
    image: './clover-proj-img.png',
    description:
      'Clover Laundry is a laundry service based in Alicante, Spain.',
    url: 'https://cloverlavanderia.es/',
  },
];

const SectionContainer = styled(Box)`
  height: 100vh;
  background-color: ${palette.black};
  color: ${palette.beige};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 50px;
  padding: 0 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }
`;

const ProjectDescripStyled = styled(Typography)({
  position: 'absolute',
  backgroundColor: palette.beige,
  padding: '20px',
  color: palette.black,
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  fontSize: '1rem',
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
});

const ImageContainer = styled(Box)`
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ProjectList = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 350px;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 0;
    align-items: center;
    text-align: center;
  }
`;

const ProjectItem = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  display: 'flex',
  position: 'relative',
  padding: '10px 0',
  transition: 'color 0.3s ease',
  '&:hover .arrow': {
    animation: 'stretchArrow 1s ease-in-out infinite',
    color: palette.beige,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    width: '100%',
    height: '2px',
    backgroundColor: palette.beige,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
    backgroundColor: palette.maroon,
  },
});

const ProjectsSection = () => {
  const [activeImage, setActiveImage] = useState(
    projects[PROJECTS_INITIAL].image
  );
  const imageRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  useTextAnimation(projectsRef, '.section__title__char', 'top center');

  const handleHover = (image: string) => {
    setActiveImage(image);
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 5 },
        { opacity: 0.7, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  };

  return (
    <SectionContainer ref={projectsRef} id="projects">
      <GlobalStyles />
      <ImageContainer>
        <Box
          ref={imageRef}
          component="img"
          src={activeImage}
          alt="Project preview"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50px',
          }}
        />
        <ProjectDescripStyled>
          {
            projects.find((project) => project.image === activeImage)
              ?.description
          }
        </ProjectDescripStyled>
      </ImageContainer>
      <ProjectList>
        <StyledSectionTitle>
          <TextSplitter text={'Projects'} className={'section__title__char'} />
        </StyledSectionTitle>
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            onMouseEnter={() => handleHover(project.image)}
            onClick={() => project.url && window.open(project.url, '_blank')}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <ArrowStyled className="arrow" /> {project.name}
            </Box>
          </ProjectItem>
        ))}
      </ProjectList>
    </SectionContainer>
  );
};

export default ProjectsSection;
