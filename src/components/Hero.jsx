import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const textScrollRef = useRef(null);
  const textLoadRef = useRef(null);

  useEffect(() => {
    // Parallax & Blur effect on scroll
    gsap.to(bgRef.current, {
      yPercent: 30, // move down slower than scroll
      filter: "blur(10px)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Fade and scale up text on initial load
    gsap.fromTo(textLoadRef.current, 
      { opacity: 0, scale: 0.9, y: 30 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 2, 
        ease: "power3.out"
      }
    );

    // Fade out text on scroll
    gsap.to(textScrollRef.current, {
      opacity: 0,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url('/images/Cinematic_hero_shot_of_a_royal_enfield_continental_delpmaspu.png')` }}
      />
      
      {/* Vignette Overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/90 pointer-events-none" />

      {/* Hero Text */}
      <div ref={textScrollRef} className="relative z-10 text-center flex flex-col items-center mt-20">
        <div ref={textLoadRef}>
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-white tracking-widest drop-shadow-2xl font-bold mb-4 uppercase">
            Royal Enfield
          </h1>
          <h2 className="font-sans text-xl md:text-2xl text-brand-silver font-light tracking-[0.3em] uppercase">
            Continental GT 650
          </h2>
        </div>
      </div>
    </section>
  );
}
