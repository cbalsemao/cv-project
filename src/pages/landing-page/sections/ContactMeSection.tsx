import { useEffect } from 'react';
import { gsap } from 'gsap';
import Grid from '@mui/material/Grid2';
import { styled, TextField, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonSend from '../../../components/ButtonSend';
import { palette, theme } from '../../../utils/styleguide';
import OceanAnimationSvg from '../../../components/animations-background/OceanAnimationSvg';

const ContactMeContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  overflow: 'hidden',

  color: 'white',
  backgroundColor: palette.black,
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: 'moveBackground 40s linear infinite',
  '@keyframes moveBackground': {
    '0%': { backgroundPosition: '0% 0%' },
    '50%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0% 0%' },
  },
  position: 'relative', // Asegúrate de que el contenedor tenga posición relativa
  zIndex: 0, // Establece zIndex en 0
}));

const StyledFormContainer = styled(Grid)(({ theme }) => ({
  background: palette.gray,
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
  maxWidth: 500,
  width: '100%',
  position: 'relative', // Asegúrate de que el contenedor del formulario tenga posición relativa
  zIndex: 200, // Aumenta el zIndex para que esté encima del SVG
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: palette.burgundy,
    },
  },
  '& label': {
    color: 'gray',
  },
  '& label.Mui-focused': {
    color: palette.burgundy,
  },
});

const ContactMeSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    gsap.fromTo(
      '.form-container',
      { y: -5 },
      {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <ContactMeContainer container id={'contact'}>
      <OceanAnimationSvg />
      <StyledFormContainer className="form-container">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          align="center"
          gutterBottom
          sx={{
            color: palette.beige,
            fontFamily: theme.typography.fontFamily,
            fontWeight: 'bold',
          }}
        >
          Get in Touch
        </Typography>
        <form
          target="_self"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <input type="hidden" name="_next" />

          <StyledTextField
            label="Name"
            name="name"
            variant="outlined"
            required
            fullWidth
            autoComplete="off"
          />
          <StyledTextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            required
            fullWidth
            autoComplete="off"
          />

          <StyledTextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            required
            fullWidth
            autoComplete="off"
          />

          <ButtonSend />
        </form>
      </StyledFormContainer>
    </ContactMeContainer>
  );
};

export default ContactMeSection;
