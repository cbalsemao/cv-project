import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const EducationSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('education.title')} side={'right'}>
      <div>
        <h3>Computer Science</h3>
        <p>Universita' degli Studi di Milano</p>
        <p>2017 - No degree</p>

        <h3>Secondary School Diploma in Informatica</h3>
        <p>Istituto Tecnico Informatico UTU - Uruguay</p>
        <p>2009 - 2016</p>
      </div>
    </Section>
  );
};

export default EducationSection;
