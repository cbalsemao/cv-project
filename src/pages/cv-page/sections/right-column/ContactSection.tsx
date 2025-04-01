import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';
import { ContainerStyled } from '../../styled-components/Components';

const ContactSection = () => {
  const { t } = useTranslation();
  const CONTACT_INFO = {
    location: t('contact.location'),
    email: t('contact.email'),
    phone: t('contact.phone'),
  };
  return (
    <Section title={t('contact.title')} side={'left'}>
      <ContainerStyled>
        <p>
          <strong>Location: </strong>
          {''}
          {CONTACT_INFO.location}
        </p>
        <p>
          <strong>Email:</strong> {''}
          {CONTACT_INFO.email}
        </p>
        <p>
          <strong>Phone:</strong> {''}
          {CONTACT_INFO.phone}
        </p>
      </ContainerStyled>
    </Section>
  );
};

export default ContactSection;
