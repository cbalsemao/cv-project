import Lottie from 'lottie-react';
import animationData from '../assets/cat-animation-lottie.json';
import { styled } from '@mui/material';
import { useViewPort } from '../hooks/useViewport';

type CatAnimationProps = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const StyledLottie = styled(Lottie, {
  shouldForwardProp: (prop) =>
    prop !== 'isMobile' && prop !== 'isTablet' && prop !== 'isDesktop',
})<CatAnimationProps>`
  flex-shrink: 0;
  width: ${({ isMobile, isTablet, isDesktop }) =>
    isMobile ? '45px' : isTablet ? '70px' : isDesktop ? '100px' : '150px'};
  height: ${({ isMobile, isTablet, isDesktop }) =>
    isMobile ? '45px' : isTablet ? '70px' : isDesktop ? '100px' : '150px'};
`;

const CatAnimation = () => {
  const { isMobile, isDesktop, isTablet } = useViewPort();

  return (
    <StyledLottie
      animationData={animationData}
      isMobile={isMobile}
      isTablet={isTablet}
      isDesktop={isDesktop}
    />
  );
};

export default CatAnimation;
