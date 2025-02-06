import { Typography } from '@mui/material';
import React from 'react';
import { palette } from '../utils/styleguide';

type TitleProps = {
  label: React.ReactNode;
  side?: 'left' | 'right';
};

const Title: React.FC<TitleProps> = ({ label, side = 'left' }) => {
  return (
    <Typography
      sx={{
        backgroundColor: palette.black,
        color: 'white',
        padding: '5px',
        paddingLeft: '20px',
        borderRadius: side === 'left' ? '0 20px 20px 0' : '20px 0 0 20px',
      }}
    >
      {label}
    </Typography>
  );
};

export default Title;
