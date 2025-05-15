import { useTranslation } from 'react-i18next';
import { ContainerStyled } from '../styled-components/Components';
import Section from '../../../components/Section';
import { LANGUAGE_INDEX } from '../../../utils/utils';

const LanguagesSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('languages.title')}>
      <ContainerStyled>
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
      </ContainerStyled>
    </Section>
  );
};

export default LanguagesSection;
