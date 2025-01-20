import Grid from '@mui/material/Grid2';

const AboutMeSection = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Grid>
        <h1>I am a frontend developer</h1>
        <p>
          I am a frontend developer with experience in building web applications
          using React. I have a passion for creating beautiful and user-friendly
          interfaces.
        </p>
      </Grid>
      <Grid>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Material UI</li>
          <li>Styled Components</li>
          <li>React Testing Library</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default AboutMeSection;
