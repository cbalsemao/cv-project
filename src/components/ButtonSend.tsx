import { Button } from '@mui/material';
import { palette } from '../utils/styleguide';

const ButtonSend = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: palette.darkPink,
        '&:hover': { backgroundColor: '#d81b60' },
      }}
    >
      Send
    </Button>
  );
};

export default ButtonSend;
