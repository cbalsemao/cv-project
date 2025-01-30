import { useEffect } from 'react';
import { MutableRefObject } from 'react';
//ref: MutableRefObject<HTMLElement | null> ??

import gsap from 'gsap';

export const useTextAnimation = (
  ref: MutableRefObject<HTMLElement | null>,
  className: string
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const charElements = gsap.utils.toArray(className);

      gsap.set(charElements, {
        yPercent: (i) => (i % 2 === 0 ? -100 : 0),
        opacity: 0,
      });

      // Create animation for the letters
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 50%',
            end: 'top 0%',
            toggleActions: 'play reverse play reverse',
          },
        })
        .to(charElements, {
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 1.5,
          stagger: 0.05,
        });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);
};
