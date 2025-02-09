import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { formattedId, PAGES_NAMES } from '../../utils/utils';
import { palette, theme } from '../../utils/styleguide';
import { SmallMenuProps } from '../../utils/types';

const StyledDrawer = styled(Drawer)({
  zIndex: 6000,
  '& .MuiDrawer-paper': {
    height: '100%',
    position: 'relative',
    backgroundColor: palette.black,
  },
});

const ListStyled = styled(List)({
  fontWeight: 'bold',
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
  },
});

const ListItemStyled = styled(ListItem)({
  display: 'flex',
  flexDirection: 'column',
  color: palette.darkPink,
  fontFamily: theme.typography.fontFamily,
  textTransform: 'uppercase',
  '&:hover': {
    color: palette.purple,
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
  },
});

const BoxIconStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

const BoxListStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  zIndex: 7000,
});

const IconButtonStyled = styled(IconButton)({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'rotate(180deg)',
  },
});

export const MobileMenu = ({
  handleDrawerToggle,
  handleScroll,
  drawerOpen,
}: SmallMenuProps) => {
  const onNavItemHandler = (page: string) => {
    handleScroll(formattedId(page));
    handleDrawerToggle();
  };

  return (
    <>
      <IconButton onClick={handleDrawerToggle} sx={{ color: palette.darkPink }}>
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        transitionDuration={{
          enter: 500,
          exit: 500,
        }}
      >
        <BoxIconStyled>
          <IconButtonStyled onClick={handleDrawerToggle}>
            <CloseIcon sx={{ fontSize: 40, color: 'white' }} />
          </IconButtonStyled>
        </BoxIconStyled>
        <BoxListStyled>
          <ListStyled>
            {PAGES_NAMES.map((page) => {
              return (
                <ListItemStyled
                  key={page}
                  onClick={() => onNavItemHandler(page)}
                >
                  <ListItemText primary={page} />
                </ListItemStyled>
              );
            })}
          </ListStyled>
        </BoxListStyled>
      </StyledDrawer>
    </>
  );
};

export default MobileMenu;
