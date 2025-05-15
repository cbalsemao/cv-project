import Photo from '../../../components/Photo';
import { Box, styled } from '@mui/material';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContactSection from './ContactSection';

interface AvatarSectionWrapperProps {
  bgColor: string;
}

const AvatarSectionWrapper = styled('div')<AvatarSectionWrapperProps>(
  ({ bgColor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: bgColor ? bgColor : 'white',
    marginBottom: '20px',
  })
);

const AvatarSection = () => {
  const { t } = useTranslation();
  return (
    <AvatarSectionWrapper bgColor="white">
      <Photo />
      <Box>
        <Typography
          variant="h5"
          style={{
            marginTop: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {t('avatar.fullName')}
        </Typography>
        <Typography variant="h6">{t('avatar.role')}</Typography>
      </Box>
      <ContactSection />
    </AvatarSectionWrapper>
  );
};

export default AvatarSection;
