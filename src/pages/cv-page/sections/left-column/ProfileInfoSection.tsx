import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';
import { ContainerStyled } from '../../styled-components/Components';

const ProfileInfoSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('profile.title')}>
      <ContainerStyled>
        <p>{t('profile.description')}</p>
      </ContainerStyled>
    </Section>
  );
};

export default ProfileInfoSection;
