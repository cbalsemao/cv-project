import { useTranslation } from 'react-i18next';
import Section from '../../../components/Section';
import { ContainerStyled } from '../styled-components/Components';

const SKILL_LIST = [
  'React',
  'Redux',
  'TypeScript',
  'CSS/HTML',
  'Node.js',
  'Express',
  'MondgoDB',
];

const SkillsSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('skills.title')}>
      <ContainerStyled>
        <ul style={{ columns: 2 }}>
          {SKILL_LIST.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </ContainerStyled>
    </Section>
  );
};

export default SkillsSection;
