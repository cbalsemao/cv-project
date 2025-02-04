import { useEffect } from 'react';
import { gsap } from 'gsap';
import Grid from '@mui/material/Grid2';
import { styled, TextField, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonSend from '../../../components/ButtonSend';

const ContactMeContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  color: 'white',
  backgroundColor: '#121212',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(/wave-background.png)',
  backgroundPosition: 'center',
  animation: 'moveBackground 40s linear infinite',
  '@keyframes moveBackground': {
    '0%': { backgroundPosition: '0% 0%' },
    '50%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0% 0%' },
  },
}));

const StyledFormContainer = styled(Grid)(({ theme }) => ({
  background: '#1e1e1e',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
  maxWidth: 500,
  width: '100%',
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
      borderColor: '#680747',
    },
  },
  '& label': {
    color: 'gray',
  },
  '& label.Mui-focused': {
    color: '#680747',
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
    <ContactMeContainer container>
      <StyledFormContainer className="form-container">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          align="center"
          gutterBottom
        >
          Get in Touch
        </Typography>
        <form
          target="_self"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <input
            type="hidden"
            name="_next"
            value="https://cloverlavanderia.es/thank-you"
          />

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
