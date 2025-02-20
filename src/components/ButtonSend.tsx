import { Button } from '@mui/material';
import { palette } from '../utils/styleguide';

const ButtonSend = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: 'bold',
        color: palette.beige,
        backgroundColor: palette.burgundy,
        '&:hover': { backgroundColor: palette.maroon },
      }}
    >
      Send
    </Button>
  );
};

export default ButtonSend;
