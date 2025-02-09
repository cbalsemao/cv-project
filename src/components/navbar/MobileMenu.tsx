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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
  justifyContent: 'center',
  alignItems: 'center',
  color: palette.darkPink,
  fontFamily: theme.typography.fontFamily,
  textTransform: 'uppercase',
  padding: '10px 20px',
  '&:hover': {
    color: palette.darkWhite,
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
  },
  '&:hover .arrow': {
    animation: 'stretchArrow 1s ease-in-out infinite',
    color: palette.darkWhite,
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

const ArrowStyled = styled(ArrowRightAltIcon)({
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  marginLeft: '10px',
  transformOrigin: 'left center',
});

const GlobalStyles = styled('style')`
  @keyframes stretchArrow {
    0% {
      transform: scaleX(1);
    }
    25% {
      transform: scaleX(1.3);
    }
    50% {
      transform: scaleX(1);
    }
    75% {
      transform: scaleX(1.3);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

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
      <GlobalStyles />
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
                  <ArrowStyled className="arrow" />
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
