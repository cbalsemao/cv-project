import { SVGProps } from 'react';
import { palette } from '../utils/styleguide';
import { styled } from '@mui/material';

const SvgStyled = styled('svg')({
  display: 'block',
  backgroundPositionX: 0,
  backgroundPositionY: 0,
  backgroundSize: 'auto',
  background: palette.black,
  width: 1952,
  height: 911,
  position: 'absolute',
});

const GlobalStylesAnimation = styled('style')`
  @keyframes pathAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.08);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const WaveAnimationSvg = (props: SVGProps<SVGSVGElement>) => (
  <SvgStyled {...props}>
    <g
      style={{
        transform: 'matrix(80,0,0,50,2002.48,-290.282)',
      }}
    >
      <path
        fill={palette.darkWhite}
        d="M12.054 0c0 4.187 1.577 3.035-.516 6.661S9.653 8.345 6.027 10.44 4.187 13.322 0 13.322s-2.4-.79-6.027-2.883-3.417-.152-5.51-3.778-.517-2.474-.517-6.661-1.577-3.035.516-6.661 1.885-1.684 5.511-3.778 1.84-2.883 6.027-2.883 2.4.79 6.027 2.883 3.417.152 5.51 3.778.517 2.474.517 6.661"
        opacity={0.8}
        style={{
          fill: palette.darkPink,
          transform: 'matrix(1,9,9,1,0,9)',
          animation: 'pathAnimation 10s infinite',
        }}
        transform="matrix(50 0 0 50 2002.48 -290.282)"
      />
    </g>
    <GlobalStylesAnimation />
    <g
      style={{
        transform: 'matrix(80,0,0,60,2207.78,-439.438)',
      }}
    >
      <path
        d="M14.464 0c0 5.024 1.893 3.642-.619 7.993s-2.262 2.021-6.613 4.533-2.208 3.46-7.232 3.46-2.88-.947-7.232-3.46-4.1-.181-6.613-4.533-.62-2.969-.62-7.993-1.892-3.642.62-7.993 2.262-2.021 6.613-4.533 2.208-3.46 7.232-3.46 2.88.947 7.232 3.46 4.1.181 6.613 4.533.62 2.969.62 7.993"
        opacity={0.42}
        style={{
          fill: palette.burgundy,
          transform: 'matrix(1,0,0,1,0,0)',
          animation: 'pathAnimation 10s infinite',
        }}
        transform="matrix(60 0 0 60 2207.777 -439.438)"
      />
    </g>
  </SvgStyled>
);
export default WaveAnimationSvg;
