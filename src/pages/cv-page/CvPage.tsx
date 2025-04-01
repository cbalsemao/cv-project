import { Grid2 as Grid, styled } from '@mui/material';
import AvatarSection from './sections/left-column/AvatarSection';
import ProfileInfoSection from './sections/left-column/ProfileInfoSection';
import SkillsSection from './sections/left-column/SkillsSection';
import LanguagesSection from './sections/left-column/LanguagesSection';
import ContactSection from './sections/right-column/ContactSection';
import ExperiencesSection from './sections/right-column/ExperiencesSection';
import EducationSection from './sections/right-column/EducationSection';

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
// const PageWrapper = styled('div')({
//   height: '100%',
//   margin: '0px',
//   padding: '0px',
//   minWidth: '1111px',
// });

const LeftColumn = styled(Grid)({
  paddingRight: '20px',
});

const RightColumn = styled(Grid)({
  paddingLeft: '20px',
  paddingTop: '20px',
});

const CvPage = () => {
  return (
    <PageWrapper isA4={true}>
      <Grid container spacing={2} justifyContent="center">
        <LeftColumn container size={6} direction="column">
          <AvatarSection />
          <ProfileInfoSection />
          <ContactSection />
          <SkillsSection />
          <LanguagesSection />
          <EducationSection />
        </LeftColumn>
        <RightColumn container size={6} direction="column">
          <ExperiencesSection />
        </RightColumn>
      </Grid>
    </PageWrapper>
  );
};

export default CvPage;
