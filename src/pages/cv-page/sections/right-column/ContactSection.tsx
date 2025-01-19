import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const CONTACT_INFO = {
  location: 'Via Roberto Lepetit 3, 20124 Milano, Italy',
  email: 'joaco.cwd@gmail.com',
  phone: '+39 388 978 5457',
};
const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('contact.title')} side={'left'}>
      <p>
        <strong>Location:</strong>
        {CONTACT_INFO.location}
      </p>
      <p>
        <strong>Email:</strong>
        {CONTACT_INFO.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {CONTACT_INFO.phone}
      </p>
    </Section>
  );
};

export default ContactSection;
