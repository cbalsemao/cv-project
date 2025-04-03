import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { useRef } from 'react';
import { palette, theme } from '../../../utils/styleguide';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useTextAnimation from '../../../hooks/useTextAnimation';
import { PROJECTS_INITIAL } from '../../../utils/types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const VisitButton = styled(Button)({
  backgroundColor: 'black',
  color: palette.white,
  '&:hover': {
    backgroundColor: palette.burgundy,
  },
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '1rem',
  padding: '6px 12px',
  minWidth: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
});

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
    information: [
      {
        nameDesc: 'Responsive Design:',
        infoDesc:
          'Built with Material UI, the site offers a seamless user experience across devices, ensuring adaptability from mobile to desktop.',
      },
      {
        nameDesc: 'Component-Based Architecture:',
        infoDesc:
          'Leveraging React and Typescript, the codebase is modular and reusable, simplifying future updates and maintenance.',
      },
      {
        nameDesc: 'Technology stack',
        infoDesc: 'React, Typescript, Material UI',
      },
      {
        repository: 'Visit:',
        repositoryUrl: 'https://github.com/cbalsemao/hangman-game',
      },
    ],
    url: 'https://hangman-game-topaz-phi.vercel.app/',
  },
  // {
  //   id: 2,
  //   name: 'Art Shop',
  //   image:
  //     'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  //   description: 'E-commerce de arte',
  // },

  // {
  //   id: 3,
  //   name: 'TODO list',
  //   image:
  //     'https://cdn.theatlantic.com/thumbor/yHhIvkBiGvKKubxVHTNXvU4nCKQ=/1x122:2554x1452/1200x625/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
  //   description: 'A simple todoList',
  // },
  // {
  //   id: 4,
  //   name: 'Memory Store',
  //   image:
  //     'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  //   description: 'Application to save your memories',
  // },
  {
    id: 5,
    name: 'Clover Laundry',
    image: './clover-proj-img.png',
    description: 'Laundry service based in Alicante, Spain.',
    url: 'https://cloverlavanderia.es/',
    information: [
      {
        nameDesc: 'Responsive Design:',
        infoDesc:
          'Built with Material UI for a seamless, responsive experience',
      },
      {
        nameDesc: 'Component-Based Architecture:',
        infoDesc: 'Built with React and TypeScript for modular, reusable code.',
      },
      {
        nameDesc: 'Bilingual Support:',
        infoDesc:
          'Includes a language switcher for English and Spanish accessibility.',
      },
      {
        nameDesc: 'Technology stack:',
        infoDesc: 'React, Typescript, Material UI',
      },

      {
        repository: 'Visit:',
        repositoryUrl: 'https://github.com/cbalsemao/clover-laundry',
      },
    ],
  },
  {
    id: 6,
    name: 'Rosemary Restaurant',
    image: './rosemary-proj-img.png',
    description: 'Restaurant based in Alicante, Spain.',
    url: 'https://rosemary-proj.vercel.app/',
    information: [
      {
        nameDesc: 'Responsive Design:',
        infoDesc:
          'Built with Material UI for a seamless, responsive experience',
      },
      {
        nameDesc: 'Component-Based Architecture:',
        infoDesc: 'Built with React and TypeScript for modular, reusable code.',
      },

      {
        nameDesc: 'Bilingual Support:',
        infoDesc:
          'Includes a language switcher for English and Spanish accessibility.',
      },
      {
        nameDesc: 'Technology stack:',
        infoDesc: 'React, Typescript, Material UI',
      },
      {
        repository: 'Visit:',
        repositoryUrl: 'https://github.com/cbalsemao/rosemary',
      },
    ],
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
  backgroundColor: palette.darkWhite,
  padding: '20px',
  color: palette.black,
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  fontSize: '1rem',
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  opacity: 0.9,
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

            borderRadius: '50px',
            objectFit: 'cover',
          }}
        />
        <ProjectDescripStyled>
          <>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                fontSize: '1.2rem',
              }}
            >
              {
                projects.find((project) => project.image === activeImage)
                  ?.description
              }
            </Typography>
            <Box>
              {projects
                .find((project) => project.image === activeImage)
                ?.information?.map((info, index) => (
                  <Typography
                    key={index}
                    sx={{ fontFamily: theme.typography.fontFamily }}
                  >
                    <strong>{info.nameDesc}</strong> {info.infoDesc}
                  </Typography>
                ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {
                  projects
                    .find((project) => project.image === activeImage)
                    ?.information.find((info) => info.repository)?.repository
                }
              </Typography>
              <VisitButton
                onClick={() => {
                  const project = projects.find((p) => p.image === activeImage);
                  const repoUrl = project?.information.find(
                    (info) => info.repositoryUrl
                  )?.repositoryUrl;
                  if (repoUrl) window.open(repoUrl, '_blank');
                }}
              >
                <GitHubIcon />
                GitHub
              </VisitButton>
              <VisitButton
                onClick={() => {
                  const project = projects.find((p) => p.image === activeImage);
                  if (project?.url) window.open(project.url, '_blank');
                }} //TODO: change this, make it more generic
              >
                <LanguageIcon />
                Website
              </VisitButton>
            </Box>
          </>
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
