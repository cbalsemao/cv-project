import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const ProfileInfoSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('profile.title')}>
      <div>
        <p>
          Analitico, pragmatico e razionale. Sono appassionato del mondo web in
          particolare react, ci tengo molto al clean code e alla collaborazione
          in team. <br />
          Ho maturato diverse esperienze nel settore finanziario e affrontato i
          problemi con motivazione e creatività. <br />
          Vorrei crescere professionalmente nel mondo front-end, imparare nuove
          tecnologie e perfezionare le mie conoscenze.
        </p>
      </div>
    </Section>
  );
};

export default ProfileInfoSection;
