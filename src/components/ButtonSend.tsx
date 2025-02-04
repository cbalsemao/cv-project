import { Button } from '@mui/material';

const ButtonSend = () => {
  return (
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
  );
};

export default ButtonSend;
