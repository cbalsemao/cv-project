import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { palette } from '../../../utils/styleguide';

export const ButtonDesktopNavbar = styled(Button)`
  color: ${palette.white};
  font-weight: bold;

  background-color: transparent;
  font-size: 20px;

  &:hover {
    color: ${palette.purple};
    background-color: transparent;
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
