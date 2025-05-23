import { BrowserRouter, Route, Routes } from 'react-router';
import CvPage from './pages/cv-page/CvPage';
import LandPage from './pages/landing-page/LandPage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/translation-en.json';
import itTranslation from './translations/translation-it.json';
import './styles/globals.css';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    it: { translation: itTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="cv" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
