'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from './Text Type/TextType';
import MagicBento from './components/MagicBento';
import './MagicBentoPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function MagicBentoSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }).from(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      },
      '-=0.3'
    );
  }, []);

  return (
    <section ref={sectionRef} className="mb-section">
      <div className="mb-header">
        <h2 ref={titleRef} className="mb-title">Our Car Showroom</h2>

        {/* Subtitle with TextType inside (div instead of p) */}
        <div ref={subtitleRef} className="mb-subtitle">
          <TextType
            text={[
              'Explore performance, EVs, financing, service, trade‑in and more.',
              'Text typing effect',
              'for your websites',
              'Happy coding!'
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={220}
        particleCount={12}
        glowColor="102, 0, 255"
      />
    </section>
  );
}