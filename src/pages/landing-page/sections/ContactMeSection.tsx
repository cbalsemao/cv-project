import Grid from '@mui/material/Grid';
import { StyledSectionTitle } from '../../../styled-components/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import { Button, styled, TextField, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const ContactMeContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  color: 'white',
  backgroundColor: '#121212',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

  return (
    <ContactMeContainer container>
      <StyledFormContainer>
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

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#c3195d',
              '&:hover': { backgroundColor: '#d81b60' },
            }}
          >
            Send
          </Button>
        </form>
      </StyledFormContainer>
    </ContactMeContainer>
  );
};

export default ContactMeSection;
