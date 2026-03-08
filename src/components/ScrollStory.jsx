import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  {
    title: "Pure Café Racer Spirit",
    text: "The Royal Enfield Continental GT 650 is built with the soul of a classic café racer. Its aggressive riding posture, sculpted tank, and racing heritage create a perfect blend of vintage style and modern performance. Designed for riders who crave speed, style, and the thrill of pure motorcycling.",
    image: "/images/Side_profile_cinematic_shot_of_a_royal_enfield_con_delpmaspu.png"
  },
  {
    title: "Engineered for Performance",
    text: "At the heart of the GT 650 lies a powerful 648cc parallel twin engine delivering smooth acceleration and thrilling torque. Built for reliability and performance, it offers a refined riding experience whether you're cruising the highway or attacking twisty roads.",
    image: "/images/Extreme_closeup_macro_shot_of_the_royal_enfield_65_delpmaspu.png"
  },
  {
    title: "Timeless British-Inspired Design",
    text: "Inspired by the golden era of British café racers, the GT 650 carries a timeless design. From the teardrop fuel tank to the twin-pod instrument cluster, every detail reflects Royal Enfield’s legendary heritage and craftsmanship.",
    image: "/images/Powerful_cinematic_front_view_of_a_royal_enfield_c_delpmaspu.png"
  },
  {
    title: "Ride the Legacy",
    text: "Royal Enfield is more than a motorcycle—it’s a legacy of freedom and adventure. The Continental GT 650 continues this legacy, delivering an unforgettable riding experience that connects riders with the road and the spirit of motorcycling.",
    image: "/images/Royal_enfield_continental_gt_650_motorcycle_riding_delpmaspu.png"
  },
  {
    title: "Built for True Riders",
    text: "Every curve, every sound, and every ride of the GT 650 speaks to riders who demand authenticity. It’s not just about reaching the destination—it’s about enjoying every moment of the journey.",
    image: "/images/Cinematic_hero_shot_of_a_royal_enfield_continental_delpmaspu.png"
  }
];

export default function ScrollStory() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const panels = gsap.utils.toArray('.story-panel');
    
    // Pin the left side while the right side scrolls
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,
      id: "scroll-story-pin"
    });

    // Fade images based on scroll position of right panels
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => fadeToImage(i),
        onEnterBack: () => fadeToImage(i),
      });

      // Fade up animation for the text panels
      gsap.fromTo(panel, 
        { autoAlpha: 0, y: 50 },
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    function fadeToImage(index) {
      imagesRef.current.forEach((img, i) => {
        gsap.to(img, {
          autoAlpha: i === index ? 1 : 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().filter(st => st.vars.id === "scroll-story-pin").forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-brand-black flex flex-col md:flex-row">
      {/* LEFT SIDE - Pinned Image Container */}
      <div 
        ref={leftRef} 
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden order-1 md:order-1"
      >
        {storyData.map((data, index) => (
          <div
            key={index}
            ref={el => imagesRef.current[index] = el}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${data.image}')`,
              opacity: index === 0 ? 1 : 0,
              visibility: index === 0 ? 'inherit' : 'hidden'
            }}
          >
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent md:hidden" />
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - Scrolling Text Panels */}
      <div 
        ref={rightRef} 
        className="w-full md:w-1/2 flex flex-col items-center justify-center order-2 md:order-2 py-20 md:py-0"
      >
        {storyData.map((data, index) => (
          <div 
            key={index}
            className="story-panel w-full md:h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 mb-[30vh] md:mb-0"
          >
            <div className="max-w-xl">
              <span className="text-brand-red font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                0{index + 1} // The Details
              </span>
              <h3 className="text-3xl lg:text-5xl font-cinzel text-white mb-6 leading-tight">
                {data.title}
              </h3>
              <div className="w-12 h-1 bg-brand-gold mb-8" />
              <p className="text-gray-400 font-sans text-lg leading-relaxed font-light">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
