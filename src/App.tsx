import { BrowserRouter, Route, Routes } from 'react-router';
import CvPage from './pages/cv-page/CvPage';
import LandPage from './pages/LandPage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './translations/translation-es.json';
import enTranslation from './translations/translation-en.json';
import itTranslation from './translations/translation-it.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslation },
    en: { translation: enTranslation },
    it: { translation: itTranslation },
  },
  lng: 'it',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="cv" element={<CvPage />}>
          {/* <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
