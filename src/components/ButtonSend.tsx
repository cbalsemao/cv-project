import { Button } from '@mui/material';
import { palette } from '../utils/styleguide';
type ButtonSendProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonSend = ({ onClick }: ButtonSendProps) => {
  return (
    <Button
      // type="submit"
      variant="contained"
      onClick={onClick}
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
