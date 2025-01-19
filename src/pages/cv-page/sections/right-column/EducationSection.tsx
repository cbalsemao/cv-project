import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

type Education = {
  degree: string;
  school: string;
  date: string;
};

const EducationSection = () => {
  const { t } = useTranslation();

  const educationInfo = t('education.info', {
    returnObjects: true,
  }) as Education[];

  return (
    <Section title={t('education.title')} side={'right'}>
      <div>
        {educationInfo.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
