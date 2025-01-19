import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const LanguagesSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('languages.title')}>
      <ul>
        <li>Spanish</li>
        <li>Italian</li>
        <li>English</li>
      </ul>
    </Section>
  );
};

export default LanguagesSection;
