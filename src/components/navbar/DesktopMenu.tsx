import { AppBar, Button, Toolbar } from '@mui/material';

const DesktopMenu = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit">about</Button>
        <Button color="inherit">projects</Button>
        <Button color="inherit">contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopMenu;
