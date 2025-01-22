import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const AboutMeSection = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: '100vh',
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        <Grid size={12} sx={{ padding: 10 }}>
          <Typography
            variant={'h1'}
            sx={{
              fontWeight: 'bold',
              color: '#333',
              fontSize: {
                xs: '2rem',
                sm: '3rem',
                md: '4rem',
                lg: '10rem',
              },
            }}
          >
            about me.
          </Typography>
        </Grid>
        <Grid
          size={12}
          sx={{ display: 'flex', gap: 20, padding: 10, paddingTop: 0 }}
          justifyContent={'start'}
          alignItems={'start'}
        >
          <Box
            sx={{
              backgroundColor: 'gray',
              padding: 5,
              borderRadius: '20px',
            }}
          >
            <Typography variant={'h4'}>
              I am a frontend developer with experience in building web
              applications using React. I have a passion for creating beautiful
              and user-friendly interfaces.
            </Typography>
          </Box>
          <Typography variant={'h4'}>
            I am a frontend developer with experience in building web
            applications using React. I have a passion for creating beautiful
            and user-friendly interfaces.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMeSection;
