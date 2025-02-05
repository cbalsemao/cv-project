import { Box, Button } from '@mui/material';
import { formattedId, PAGES_NAMES } from '../../utils/utils';
import { useViewPort } from '../../hooks/useViewport';

type DesktopMenuProps = {
  handleScroll: (sectionId: string) => void;
};

const ButtonSectionNavbar = ({
  page,
  onNavItemHandler,
  isDesktop,
}: {
  page: string;
  onNavItemHandler: (page: string) => void;
  isDesktop: boolean;
}) => {
  return (
    <Button
      key={page}
      onClick={() => onNavItemHandler(page)}
      sx={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: isDesktop ? '25px' : '20px',
        textTransform: 'lowercase',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '&:hover': {
          color: 'purple',
          backgroundColor: 'transparent',
        },
      }}
    >
      {page}
    </Button>
  );
};

export const DesktopMenu = ({ handleScroll }: DesktopMenuProps) => {
  const { isDesktop } = useViewPort();

  const onNavItemHandler = (page: string) => {
    handleScroll(formattedId(page));
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        justifyContent: 'flex-end',
        paddingRight: '20px',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '2px solid white',
          padding: '15px 30px',
          minWidth: '250px',
          minHeight: '60px',
          borderRadius: '15px',
        }}
      >
        {PAGES_NAMES.map((page) => (
          <ButtonSectionNavbar
            key={page}
            page={page}
            onNavItemHandler={onNavItemHandler}
            isDesktop={isDesktop}
          />
        ))}
      </Box>
    </Box>
  );
};
