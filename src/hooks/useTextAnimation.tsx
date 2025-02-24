import { useEffect } from 'react';
import { MutableRefObject } from 'react';
import gsap from 'gsap';

const useTextAnimation = (
  ref: MutableRefObject<HTMLElement | null>,
  className: string,
  start: string,
  end?: string
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const charElements = gsap.utils.toArray(className);

      gsap.set(charElements, {
        yPercent: (i) => (i % 2 === 0 ? -100 : 0),
        opacity: 0,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: start,
            end: end,
            toggleActions: 'play none none none',
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
  }, [ref, className, start]);
};

export default useTextAnimation;
