import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const SKILL_LIST = [
  'React',
  'Typescript',
  'Zustand',
  'Graphql',
  'Redux',
  'HTML/CSS',
  'Git/SVN',
  'Java Spring',
  'Hibernate',
  'Rest/Soap',
  'Mysql/Mongo',
  'NodeJs',
  'Express/Nest',
  'ELK',
  'Redis',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'Openshift',
];

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
