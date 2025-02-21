import { palette } from '../utils/styleguide';
import { styled } from '@mui/material';

const ValleySvgStyled = styled('svg')({
  shapeRendering: 'auto',
  display: 'block',
  background: palette.black,
  width: '100%',
  height: 804,
  position: 'absolute',
});

const GlobalStylesAnimValley = styled('style')`
  @keyframes wave1 {
    0% {
      d: path(
        'M0 760.077q192-43.605 384-43.753t384-69.522 384-37.959 384 2.877 384-9.33V198.363q-192-20.523-384-25.708t-384 33.811-384-48.542-384-26.028T0 58.924Z'
      );
    }
    50% {
      d: path(
        'M0 760.077q192-55.605 384-55.753t384-80.522 384-30.959 384 10.877 384-15.33V208.363q-192-25.523-384-30.708t-384 45.811-384-42.542-384-28.028T0 48.924Z'
      );
    }
    100% {
      d: path(
        'M0 760.077q192-43.605 384-43.753t384-69.522 384-37.959 384 2.877 384-9.33V198.363q-192-20.523-384-25.708t-384 33.811-384-48.542-384-26.028T0 58.924Z'
      );
    }
  }

  @keyframes wave2 {
    0% {
      d: path(
        'M0 692.001q192-14.843 384-23.41t384-39.802 384-9.084 384 5.439 384-73.614V265.268q-192-29.465-384-29.69t-384-96.556-384-13.255-384-37.623T0 43.04Z'
      );
    }
    50% {
      d: path(
        'M0 692.001q192-20.843 384-30.41t384-45.802 384-5.084 384 8.439 384-65.614V275.268q-192-35.465-384-30.69t-384-92.556-384-15.255-384-30.623T0 50.04Z'
      );
    }
    100% {
      d: path(
        'M0 692.001q192-14.843 384-23.41t384-39.802 384-9.084 384 5.439 384-73.614V265.268q-192-29.465-384-29.69t-384-96.556-384-13.255-384-37.623T0 43.04Z'
      );
    }
  }

  @keyframes wave3 {
    0% {
      d: path(
        'M0 743.528q192-61.917 384-65.033t384-43.359 384-32.466 384-28.906 384 8.336V225.037q-192-10.114-384-19.407t-384-16.877-384-97.426-384 49.241T0 35.084Z'
      );
    }
    50% {
      d: path(
        'M0 743.528q192-55.917 384-60.033t384-50.359 384-25.466 384-30.906 384 12.336V230.037q-192-15.114-384-22.407t-384-10.877-384-92.426-384 42.241T0 40.084Z'
      );
    }
    100% {
      d: path(
        'M0 743.528q192-61.917 384-65.033t384-43.359 384-32.466 384-28.906 384 8.336V225.037q-192-10.114-384-19.407t-384-16.877-384-97.426-384 49.241T0 35.084Z'
      );
    }
  }

  .wave1 {
    animation: wave1 6s infinite ease-in-out;
  }
  .wave2 {
    animation: wave2 7s infinite ease-in-out;
  }
  .wave3 {
    animation: wave3 5s infinite ease-in-out;
  }
`;

const ValleyAnimationSvg = () => (
  <ValleySvgStyled
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <defs>
      <linearGradient id="a" x1={0} x2={1} y1={0} y2={0}>
        <stop offset={0} stopColor={palette.maroon} />
        <stop offset={1} stopColor={palette.burgundy} />
      </linearGradient>

      <GlobalStylesAnimValley />
    </defs>

    <path
      className="wave1"
      fill="url(#a)"
      d="M0 760.077q192-43.605 384-43.753t384-69.522 384-37.959 384 2.877 384-9.33V198.363q-192-20.523-384-25.708t-384 33.811-384-48.542-384-26.028T0 58.924Z"
      opacity={0.4}
    />

    <path
      className="wave2"
      fill="url(#a)"
      d="M0 692.001q192-14.843 384-23.41t384-39.802 384-9.084 384 5.439 384-73.614V265.268q-192-29.465-384-29.69t-384-96.556-384-13.255-384-37.623T0 43.04Z"
      opacity={0.4}
    />

    <path
      className="wave3"
      fill="url(#a)"
      d="M0 743.528q192-61.917 384-65.033t384-43.359 384-32.466 384-28.906 384 8.336V225.037q-192-10.114-384-19.407t-384-16.877-384-97.426-384 49.241T0 35.084Z"
      opacity={0.4}
    />
  </ValleySvgStyled>
);

export default ValleyAnimationSvg;
