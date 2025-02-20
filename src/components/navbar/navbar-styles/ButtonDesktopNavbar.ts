import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { palette } from '../../../utils/styleguide';

export const ButtonDesktopNavbar = styled(Button)`
  color: ${palette.beige};
  font-weight: bold;

  background-color: transparent;
  font-size: 20px;

  &:hover {
    background-color: transparent;
    text-decoration: underline overline;
    color: ${palette.darkWhite};
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
