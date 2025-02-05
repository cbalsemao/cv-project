import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid2';
import { formattedId, PAGES_NAMES, handleScrollTo } from '../../utils/utils';

type SmallMenuProps = {
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
};

export const MobileMenu = ({
  handleDrawerToggle,
  drawerOpen,
}: SmallMenuProps) => {
  const onNavItemHandler = (page: string) => {
    const sectionId = formattedId(page);
    handleScrollTo(sectionId);
    handleDrawerToggle();
  };

  return (
    <>
      <IconButton
        size="large"
        onClick={handleDrawerToggle}
        sx={{ color: 'red' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          zIndex: 6000,
          '& .MuiDrawer-paper': {
            height: '100%',
            position: 'relative',
            backgroundColor: 'black',
          },
        }}
        transitionDuration={{
          enter: 500,
          exit: 500,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <CloseIcon sx={{ fontSize: 40, color: 'white' }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            zIndex: 7000,
          }}
        >
          <List
            sx={{
              '& .MuiListItem-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 2,
              },
              '& .MuiListItemText-root .MuiTypography-root': {
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 200,
              },
            }}
          >
            {PAGES_NAMES.map((page) => {
              return (
                <ListItem
                  component="li"
                  key={page}
                  onClick={() => onNavItemHandler(page)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'red',
                    textTransform: 'lowercase',
                    '&:hover': {
                      color: 'red',
                    },
                    '& .MuiListItemText-root .MuiTypography-root': {
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <ListItemText primary={page} />
                </ListItem>
              );
            })}

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            ></Grid>
          </List>
        </Box>
        <Box
          sx={{
            bottom: 200,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
