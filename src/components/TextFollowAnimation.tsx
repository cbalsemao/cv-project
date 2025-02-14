import { styled, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { palette } from '../utils/styleguide';
gsap.registerPlugin(ScrollTrigger);

const SpanStyled = styled('span')({
  backgroundImage: `linear-gradient(to right, ${palette.darkWhite} 50%, ${palette.gray} 50%)`,
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '200%',
  backgroundPosition: '100% 0px',
});

const TextStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',

  [theme.breakpoints.up('sm')]: {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.0rem',
  },
}));

const TextFollow = ({ textToAnimate }: { textToAnimate: string }) => {
  const words = textToAnimate.split(' ');
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section__title--1 span',
        scrub: 1,
        start: 'top 100%',
        end: 'top 40%',
      },
    });
    gsap.utils.toArray('.section__title--1 span').forEach((word) => {
      tl.to(word as HTMLElement, {
        backgroundPosition: `0% 0px`,
      });
    });
  });

  return (
    <div className="section">
      <TextStyled className="section__title section__title--1">
        {words.map((word, index) => {
          return <SpanStyled key={index}>{word} </SpanStyled>;
        })}
      </TextStyled>
    </div>
  );
};

export default TextFollow;
