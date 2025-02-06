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
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: palette.black,
        fontSize: '1.2rem',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '120px',
        '&:hover': {
          backgroundColor: 'gray',
        },
      }}
    >
      {hover ? 'open' : 'resume'}
    </Button>
  );
};
