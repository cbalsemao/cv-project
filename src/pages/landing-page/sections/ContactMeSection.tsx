import Grid from '@mui/material/Grid2';
import { StyledSectionTitle } from '../../../styled-components/stylesSection';
import { TextSplitter } from '../../../utils/utils';
import { Button, styled } from '@mui/material';

const ContactMeContainer = styled(Grid)({
  height: '100vh',
  color: 'white',
  backgroundColor: 'black',
  padding: 5,
  overflow: 'hidden',
});

const StyledFormContainer = styled(Grid)`
  padding-bottom: 2rem;

  .form-group {
    gap: 1rem;
  }

  .form-control {
    min-width: 300px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const ContactMeSection = () => {
  return (
    <ContactMeContainer container>
      <Grid size={12} sx={{ padding: 10 }}>
        <StyledSectionTitle>
          <TextSplitter
            text={'get in touch.'}
            className={'section__title__char'}
          />
        </StyledSectionTitle>
      </Grid>
      <Grid size={3}></Grid>
      <StyledFormContainer
        size={6} //12 cuando es mobile
        flexDirection={'column'}
        sx={{
          gap: 2,
          justifyContent: 'center',
          alignContent: 'center',
          pl: 8,
          pr: 8,
        }}
      >
        <form target="_self" method="POST">
          <input
            type="hidden"
            name="_next"
            value="https://cloverlavanderia.es/thank-you"
          />

          <input
            type="text"
            name="name"
            className="form-control"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="email"
            className="form-control"
            required
            autoComplete="off"
          />
          <input
            type="phone"
            name="phone"
            className="form-control"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            name="message"
            rows={8}
            required
            style={{ resize: 'none' }}
            autoComplete="off"
          ></textarea>

          <Button type="submit" variant={'contained'}>
            send
          </Button>
        </form>
      </StyledFormContainer>
      <Grid size={3}></Grid>
    </ContactMeContainer>
  );
};

export default ContactMeSection;
