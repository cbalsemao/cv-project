import { Box, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Javascript } from '@mui/icons-material';
import { palette, theme } from '../../../utils/styleguide';
import { useViewPort } from '../../../hooks/useViewport';
import { StyledSectionTitle } from './styles-section/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import useTextAnimation from '../../../hooks/useTextAnimation';
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiRedux } from 'react-icons/si';

type SkillProps = {
  title: string;
  icon: JSX.Element;
};

const skills = [
  {
    title: 'React',
    icon: <FaReact style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'Typescript',
    icon: (
      <BiLogoTypescript style={{ fontSize: 40, color: palette.darkWhite }} />
    ),
  },
  {
    title: 'CSS',
    icon: <FaCss3Alt style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'HTML',
    icon: <FaHtml5 style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'MongoDB',
    icon: <DiMongodb style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'Javascript',
    icon: <Javascript style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'Express JS',
    icon: <SiExpress style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'Node JS',
    icon: <DiNodejs style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
  {
    title: 'Redux',
    icon: <SiRedux style={{ fontSize: 40, color: palette.darkWhite }} />,
  },
];

const SkillCardContainer = styled(Box)({
  border: `1px solid ${palette.beige}`,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  minHeight: '150px',
  backgroundColor: palette.black,
  '&:hover': {
    backgroundColor: theme.palette.grey[900],
    transition: '0.3s',
  },
});

const SkillCard = ({ title, icon }: SkillProps) => {
  return (
    <SkillCardContainer>
      {icon}
      <Typography
        variant="h6"
        sx={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}
      >
        {title}
      </Typography>
    </SkillCardContainer>
  );
};

import { useRef } from 'react';

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { isMobile, isDesktop, isTablet } = useViewPort();
  useTextAnimation(skillsRef, '.section__title__char', 'top center');

  return (
    <Box
      ref={skillsRef}
      sx={{
        backgroundColor: palette.black,
        padding: isMobile
          ? '10px'
          : isTablet
          ? '50px 150px'
          : isDesktop
          ? '50px 450px'
          : '50px',
      }}
    >
      <StyledSectionTitle
        sx={{ justifyContent: 'center', paddingBottom: '40px' }}
      >
        <TextSplitter text={'Skills'} className={'section__title__char'} />
      </StyledSectionTitle>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <SkillCard title={skill.title} icon={skill.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
