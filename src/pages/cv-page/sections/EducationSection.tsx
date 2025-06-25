import { useTranslation } from 'react-i18next';
import { ContainerStyled } from '../styled-components/Components';
import Section from '../../../components/Section';
import { Box, Typography } from '@mui/material';

type Education = {
  degree: string;
  school: string;
  date: string;
  info?: {
    title?: string;
    description?: string[];
  }[];
};
const EducationSection = () => {
  const { t } = useTranslation();

  const educationInfo = t('education.info', {
    returnObjects: true,
  }) as Education[];

  return (
    <Section title={t('education.title')}>
      <ContainerStyled>
        <div>
          {educationInfo.map((edu, index) => (
            <div key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '5px',
                  padding: '8px 0',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  {edu.degree}
                </Typography>
                {'-'}
                <Typography sx={{ fontWeight: 'bold' }}>
                  {edu.school}
                  {','}
                </Typography>
                <p>{edu.date}</p>
              </Box>

              {Array.isArray(edu.info) &&
                edu.info.map((detail, idx) => (
                  <Box key={idx} sx={{ padding: '8px 0' }}>
                    <p>
                      <strong>{detail.title}</strong>
                    </p>

                    {detail.description?.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </Box>
                ))}
            </div>
          ))}
        </div>
      </ContainerStyled>
    </Section>
  );
};

export default EducationSection;
