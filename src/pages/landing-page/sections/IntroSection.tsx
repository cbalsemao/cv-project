import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        height: '100%',
        width: '100%',
      }}
    >
      <h1>Hello, I'm Camila</h1>
      <h1>I am a frontend developer</h1>
      <Button variant="outlined" onClick={() => navigate('/cv')}>
        Open cv
      </Button>
    </Grid>
  );
};

export default IntroSection;
