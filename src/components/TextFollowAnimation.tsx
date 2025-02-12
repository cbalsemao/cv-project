import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

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
      <h1 className="section__title section__title--1">
        {words.map((word, index) => {
          return <span key={index}>{word} </span>;
        })}
      </h1>
    </div>
  );
};

export default TextFollow;
