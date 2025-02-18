import { styled, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { palette, theme } from '../utils/styleguide';
gsap.registerPlugin(ScrollTrigger);

const SpanStyled = styled('span')({
  backgroundImage: `linear-gradient(to right, ${palette.beige} 50%, ${palette.gray} 50%)`,
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '200%',
  backgroundPosition: '100% 0px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
});

const TextStyled = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontfamily: theme.typography.fontFamily,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.0rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem',
  },
}));

const TextFollow = ({ textToAnimate }: { textToAnimate: string }) => {
  const words = textToAnimate.split(' ');
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section__title span',
        scrub: 1,
        start: 'top 100%',
        end: 'top 40%',
      },
    });
    gsap.utils.toArray('.section__title span').forEach((word) => {
      tl.to(word as HTMLElement, {
        backgroundPosition: `0% 0px`,
      });
    });
  });

  return (
    <div className="section">
      <TextStyled className="section__title">
        {words.map((word, index) => {
          return <SpanStyled key={index}>{word} </SpanStyled>;
        })}
      </TextStyled>
    </div>
  );
};

export default TextFollow;
