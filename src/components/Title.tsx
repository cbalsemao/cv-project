import { Typography, Box } from '@mui/material';
import React from 'react';
import { palette } from '../utils/styleguide';

type TitleProps = {
  label: React.ReactNode;
  side?: 'left' | 'right';
};

const Title: React.FC<TitleProps> = ({ label, side = 'right' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: side === 'right' ? 'flex-start' : 'flex-end',
      }}
    >
      <Box
        sx={{
          height: '2px',
          backgroundColor: 'skyblue',
          width: '100%',
          marginBottom: '5px',
        }}
      />
      <Typography
        sx={{
          backgroundColor: palette.white,
          color: 'black',
          padding: '5px',
          paddingLeft: '20px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          height: '2px',
          backgroundColor: 'skyblue',
          width: '100%',
          marginTop: '5px',
        }}
      />
    </Box>
  );
};

export default Title;
