import { styled } from '@mui/material';
import { Typography } from '@mui/material';
import Photo from '../../../../components/Photo';
import { useTranslation } from 'react-i18next';

interface AvatarSectionWrapperProps {
  bgColor: string;
}

const AvatarSectionWrapper = styled('div')<AvatarSectionWrapperProps>(
  ({ bgColor }) => ({
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: bgColor,
    marginBottom: '20px',
  })
);

const AvatarSection = () => {
  const { t } = useTranslation();
  return (
    <AvatarSectionWrapper bgColor={'lightgray'}>
      <Photo />

      <Typography
        variant="h5"
        style={{ marginTop: '10px', fontWeight: 'bold' }}
      >
        {t('avatar.fullName')}
      </Typography>
      <Typography variant="h6">{t('avatar.role')}</Typography>
    </AvatarSectionWrapper>
  );
};

export default AvatarSection;
