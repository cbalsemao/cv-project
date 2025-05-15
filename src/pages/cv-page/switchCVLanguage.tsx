import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const SwitchCVLanguage: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'it' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Button
        onClick={toggleLanguage}
        variant="outlined"
        sx={{
          borderRadius: '999px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '15px',
          paddingX: 3,
          paddingY: 1.2,
          color: '#0078D4',
          borderColor: '#0078D4',
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 4px rgba(0, 120, 212, 0.2)',

          '&:hover': {
            backgroundColor: '#f0f8ff',

            color: '#005A9E',
            boxShadow: '0 2px 6px rgba(0, 90, 158, 0.3)',
          },
        }}
      >
        {i18n.language === 'en' ? '🌐 IT' : '🌐 EN'}
      </Button>
    </Box>
  );
};

export default SwitchCVLanguage;
