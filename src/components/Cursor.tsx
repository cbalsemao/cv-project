'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { styled } from '@mui/material';
import { palette } from '../utils/styleguide';
import { useViewPort } from '../hooks/useViewport';

const colors = [palette.maroon, palette.white, palette.burgundy];

const CursorCircle = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  borderRadius: '50%',
  pointerEvents: 'none',
});

type CursorProps = {
  isHovered: boolean;
};

const Cursor: React.FC<CursorProps> = ({ isHovered }) => {
  const { isTablet, isMobile } = useViewPort();

  const size = isHovered
    ? isMobile
      ? 100
      : isTablet
      ? 300
      : 400
    : isMobile
    ? 15
    : isTablet
    ? 20
    : 30;
  const delay = isHovered ? 0.015 : 0.005;
  const circles = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  //linear interpolation
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const moveCircle = (x: number, y: number) => {
    if (!circles.current) return;

    circles.current.forEach((circle, i) => {
      if (circle) {
        gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
      }
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener('mousemove', manageMouseMove);
    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, []);

  return (
    <>
      {colors.map((color, i, array) => {
        return (
          <CursorCircle
            ref={(ref) => (circles.current[i] = ref)}
            key={color}
            style={{
              backgroundColor: color,
              width: size,
              height: size,
              filter: `blur(${isHovered ? 20 : 2}px)`,
              transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${
                (array.length - i) * delay
              }s linear`,
            }}
          />
        );
      })}
    </>
  );
};

export default Cursor;
