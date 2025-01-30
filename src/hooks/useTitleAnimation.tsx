import { MutableRefObject, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useTitleAnimation = (
  ref: MutableRefObject<HTMLElement | null>,
  className: string
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(className);

      gsap.set(letters, { y: 100, opacity: 0 });

      const animation = gsap.to(letters, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: 'power4.out',
        duration: 1.2,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 75%', // Starts when 75% of the section is in view
        end: 'bottom top', // Ends when the section leaves
        toggleActions: 'restart none none none', // Restart animation every time
        onEnter: () => {
          animation.restart();
        },
        onLeave: () => {
          animation.pause().progress(0); // Reset animation when leaving
        },
        onEnterBack: () => {
          animation.restart(); // Restart when coming back into view
        },
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert(); // Cleanup when component unmounts
  }, []);
};
