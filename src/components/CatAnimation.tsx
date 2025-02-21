import { styled } from '@mui/material';
import catGif from '../assets/catMugGif.gif';
import catStatic from '../assets/catMugStatic.png';
import { useState } from 'react';
import { useViewPort } from '../hooks/useViewport';

type CatGifProps = {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
};

const StyledCatGif = styled('img')<CatGifProps>(
  ({ isMobile, isTablet, isDesktop }) => ({
    width: isMobile
      ? '40px'
      : isTablet
      ? '70px'
      : isDesktop
      ? '100px'
      : '200px',
    height: isMobile
      ? '40px'
      : isTablet
      ? '70px'
      : isDesktop
      ? '100px'
      : '200px',
  })
);

const CatGif = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isDesktop, isTablet } = useViewPort();

  return (
    <StyledCatGif
      src={isHovered ? catGif : catStatic}
      alt="Animated GIF"
      isMobile={isMobile}
      isTablet={isTablet}
      isDesktop={isDesktop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default CatGif;
