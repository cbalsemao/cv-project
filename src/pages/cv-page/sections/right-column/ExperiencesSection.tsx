import { useTranslation } from 'react-i18next';
import Section from '../../../../components/Section';

const ExperiencesSection = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('experience.title')} side={'right'}>
      <div>
        <h3>Company Perigea SRL</h3>
        <p>Consulente presso Gatelab (Borsa Italiana-Euronext)</p>
        <p>2019 - 2023</p>
        <ul>
          <li>
            <h4>Co-Lead Frontend - BOOK BUILDER</h4>
            <h5>07/2021 - 2023</h5>
            <p>
              Referente web e architetto per un progetto in react. Ho
              orchestrato e monitorato gli sviluppi del team, utilizzando jira
              come supporto, e fatto train on the job delle risorse.
            </p>
          </li>

          <li>
            <h4>Frontend - CURVE BUILDER</h4>
            <h5>01/2021 - 07/2021</h5>
            <p>
              {' '}
              Costruzione in autonomia di un'infrastruttura web in react per la
              gestione di curve finanziarie in real time, tramite web-sockets e
              kafka, per traders in diverse time zones.{' '}
            </p>
          </li>

          <li>
            <h4>Frontend - RECOMENDATION</h4>
            <h5>2020</h5>
            <p>
              Collaborazione in un progetto già finito in produzione.
              Implementazione di evolutive e risoluzione di bugs.
            </p>
          </li>
          <li>
            <h4>Fullstack Developer - IP V (Indipendent Price Verification)</h4>
            <h5>09/2019 - 12/2021</h5>
            <p>
              Sviluppo di jobs con spring batch. Manutenzione di un'interfaccia
              grafica in swing e sviluppo di sezioni business per diversi assets
              finanziari su un server monolite
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ExperiencesSection;
