import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: '-100vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '2000 top',
            scrub: 0.5,
            pin: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
