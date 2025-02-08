import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import { palette } from '../utils/styleguide';

export const ButtonOpenCV = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Button
      variant="contained"
      onClick={() => navigate('/cv')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        mt: 4,
        backgroundColor: palette.darkPink,
        fontWeight: 'bold',
        color: palette.darkWhite,
        fontSize: '1.2rem',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '120px',
        zIndex: 2000,
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'gray',
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      {hover ? 'Open' : 'Resume'}
    </Button>
  );
};
