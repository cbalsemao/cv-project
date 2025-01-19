import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const ExperiencesSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('experience.title')} side={'right'}>
      {(t('experience.info', { returnObjects: true }) as any[]).map(
        (experience: any, expIndex: number) => (
          <div key={expIndex}>
            <h3>{experience.company}</h3>
            <p>{experience.role}</p>
            <p>{experience.date}</p>
            {experience.projects && (
              <ul>
                {experience.projects.map((project: any, projIndex: number) => (
                  <li key={projIndex}>
                    <h4>{project.name}</h4>
                    <h5>{project.date}</h5>
                    <ul>
                      {project.description.map(
                        (desc: string, descIndex: number) => (
                          <li key={descIndex}>{desc}</li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
            {experience.description && (
              <ul>
                {experience.description.map(
                  (desc: string, descIndex: number) => (
                    <li key={descIndex}>{desc}</li>
                  )
                )}
              </ul>
            )}
          </div>
        )
      )}
    </Section>
  );
};

export default ExperiencesSection;
