import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

const ContactSection = () => {
  const { t } = useTranslation();
  const CONTACT_INFO = {
    location: t('contact.location'),
    email: t('contact.email'),
    phone: t('contact.phone'),
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <p>
        {''}
        {CONTACT_INFO.location}
      </p>
      <p>{CONTACT_INFO.email}</p>
      <p>{CONTACT_INFO.phone}</p>
      <p>
        <a
          href="https://www.linkedin.com/in/camila-balsemao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>
      <p>
        <a
          href="https://github.com/cbalsemao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <p>
        {''}
        <a
          href="https://cv-project-gold.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </p>
    </Box>
  );
};

export default ContactSection;
