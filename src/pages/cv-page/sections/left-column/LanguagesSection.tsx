import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';
import { LANGUAGE_INDEX } from '../../../../utils/utils';

const LanguagesSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('languages.title')}>
      <ul>
        <li>
          {t(`languages.info.${LANGUAGE_INDEX.SPANISH}.name`)}:{' '}
          {t(`languages.info.${LANGUAGE_INDEX.SPANISH}.level`)}
        </li>
        <li>
          {t(`languages.info.${LANGUAGE_INDEX.ENGLISH}.name`)}:{' '}
          {t(`languages.info.${LANGUAGE_INDEX.ENGLISH}.level`)}
        </li>
        <li>
          {t(`languages.info.${LANGUAGE_INDEX.ITALIAN}.name`)}: {''}
          {t(`languages.info.${LANGUAGE_INDEX.ITALIAN}.level`)}
        </li>
      </ul>
    </Section>
  );
};

export default LanguagesSection;
