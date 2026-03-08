import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const quoteRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(quoteRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50"
        style={{ backgroundImage: "url('/src/assets/images/Powerful_cinematic_front_view_of_a_royal_enfield_c_delpmaspu.png')" }}
      />
      <div className="absolute inset-0 bg-brand-black/60" />

      {/* Content */}
      <div ref={quoteRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-white leading-snug font-bold drop-shadow-2xl mb-8">
          "Royal Enfield is not just a motorcycle.<br/>
          <span className="text-brand-silver">It is built for men who ride with passion.</span>"
        </h2>
        
        <div className="w-24 h-1 bg-brand-red mx-auto mb-8" />
        
        <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xl font-light">
          Ride the Legacy
        </p>
      </div>
    </section>
  );
}
