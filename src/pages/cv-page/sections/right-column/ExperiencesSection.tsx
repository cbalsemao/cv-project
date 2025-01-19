import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

type Project = {
  name: string;
  date: string;
  description: string[];
};

type Experience = {
  company: string;
  role: string;
  date: string;
  projects?: Project[];
  description?: string[];
};

const ExperiencesSection = () => {
  const { t } = useTranslation();

  const experiences = t('experience.info', {
    returnObjects: true,
  }) as Experience[];

  return (
    <Section title={t('experience.title')} side={'right'}>
      {experiences.map((experience, expIndex) => (
        <div key={expIndex}>
          <h3>{experience.company}</h3>
          <p>{experience.role}</p>
          <p>{experience.date}</p>
          {experience.projects && (
            <ul>
              {experience.projects.map((project, projIndex) => (
                <li key={projIndex}>
                  <h4>
                    {project.name} {project.date}
                  </h4>
                  <ul>
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          {experience.description && (
            <ul>
              {experience.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Section>
  );
};

export default ExperiencesSection;
