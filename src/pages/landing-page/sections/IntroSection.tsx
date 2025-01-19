import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const IntroSection = () => {
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',

          height: '100vh',
          flexDirection: 'column',
          backgroundColor: 'pink',
        }}
      >
        <h1>Hello, I'm Camila</h1>
        <h1>I am a frontend developer</h1>
        <Button variant="outlined">Open cv</Button>
      </Grid>
    </>
  );
};

export default IntroSection;
