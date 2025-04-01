import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';
import { Box } from '@mui/material';

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
        <Box key={expIndex} sx={{ padding: 1 }}>
          <div>
            <h3>{experience.company}</h3>
            <p>{experience.role}</p>
            <p>{experience.date}</p>
            {experience.projects && (
              <ul>
                {experience.projects.map((project, projIndex) => (
                  <Box sx={{ paddingLeft: 3 }} key={projIndex}>
                    <li key={projIndex}>
                      <h4>
                        {project.name} {project.date}
                      </h4>
                      <Box sx={{ paddingLeft: 2 }}>
                        <ul>
                          {project.description.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      </Box>
                    </li>
                  </Box>
                ))}
              </ul>
            )}
            {experience.description && (
              <Box sx={{ paddingLeft: 3 }}>
                <ul>
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </Box>
            )}
          </div>
        </Box>
      ))}
    </Section>
  );
};

export default ExperiencesSection;
