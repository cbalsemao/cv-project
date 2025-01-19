import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const SKILL_LIST = ['React', 'Redux', 'TypeScript', 'CSS/HTML'];

const SkillsSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('skills.title')}>
      <ul style={{ columns: 2 }}>
        {SKILL_LIST.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Section>
  );
};

export default SkillsSection;
