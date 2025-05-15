import { Grid2 as Grid, styled } from '@mui/material';
import LanguagesSection from './sections/LanguagesSection';
import SkillsSection from './sections/SkillsSection';
import ExperiencesSection from './sections/ExperiencesSection';
import EducationSection from './sections/EducationSection';
import ProfileInfoSection from './sections/ProfileInfoSection';
import AvatarSection from './sections/AvatarSection';

const A4_WIDTH = '210mm';
const A4_HEIGHT = '297mm';
const WEB_WIDTH = '100%';
const WEB_HEIGHT = 'auto';

const PageWrapper = styled('div')<{ isA4: boolean }>(({ isA4 }) => ({
  width: isA4 ? A4_WIDTH : WEB_WIDTH,
  height: isA4 ? A4_HEIGHT : WEB_HEIGHT,
  margin: '0px auto',
  padding: '0px',
  boxSizing: 'border-box',

  '@media print': {
    width: A4_WIDTH,
    height: A4_HEIGHT,
  },
}));

const CvPage = () => {
  return (
    <PageWrapper isA4={true}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <AvatarSection />
        <ProfileInfoSection />
        <ExperiencesSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
      </Grid>
    </PageWrapper>
  );
};

export default CvPage;
