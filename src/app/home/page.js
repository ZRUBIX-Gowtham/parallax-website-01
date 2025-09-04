'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Prism from './homeherosection/prism/HomeHeroprism';
import RotatingText from './homeherosection/RotatingText/RotatingText';
import './Hero.css';
import ShinyText from './homeherosection/ShineyText/ShinyText';

const PARALLAX_STRENGTH = 0.25; // pixels moved horizontally per pixel scrolled (tweak)

const HomeHero = () => {
  const heroRef = useRef(null);
  const [parallaxX, setParallaxX] = useState(0);

  // Cursor light effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const light = el.querySelector('.hero-cursor-light');
    if (!light) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      light.style.setProperty('--x', `${x}px`);
      light.style.setProperty('--y', `${y}px`);
      light.style.opacity = '1';
    };
    const handleLeave = () => { light.style.opacity = '0'; };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  // Horizontal parallax on scroll (right -> left as you scroll down)
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      // compute relative scroll for the hero section
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // Only apply when hero is in the viewport (optional)
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const visible = rect.top < viewportH && rect.bottom > 0;

      if (visible) {
        // The farther you scroll past the top, the more it should move left
        const scrolledPastTop = Math.max(0, viewportH - rect.top); // simple measure
        const targetX = -scrolledPastTop * PARALLAX_STRENGTH; // negative for right->left
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => setParallaxX(targetX));
      }
    };

    // Initialize and add listener
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
          <Prism
            animationType="hover"
            timeScale={0.22}
            height={3.8}
            baseWidth={6.6}
            scale={3.2}
            hueShift={0.06}
            colorFrequency={0.45}
            noise={0.05}
            glow={1.1}
            bloom={1.15}
            transparent
          />
        </div>
      </div>

      <div className="hero-overlay" />
      <div className="hero-cursor-light" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title duo-title">
          <span className="title-left">New&nbsp;Arrivals</span>
          <span className="title-right-pill">
            <RotatingText
              texts={['Hybrid', 'EV', 'Sport', 'SUV']}
              mainClassName="pill-rotating"
              staggerFrom="last"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              staggerDuration={0.03}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitLevelClassName="pill-word"
              elementLevelClassName="pill-char"
            />
          </span>
        </h1>

        <p className="hero-subtitle">
          Discover premium performance and bespoke experiences at our next‑gen car showroom.
        </p>

        <div className="hero-cta">
          <a className="btn btn-glass-primary" href="#get-started">
            <ShinyText text="Book a Test Drive 🚗" speed={3} />
          </a>
          <a className="btn btn-glass" href="#learn-more">
            <ShinyText text="Explore Models ↯" speed={3} />
          </a>
        </div>
      </div>

      {/* Bottom-right car image (from /public) */}
      <div
        className="hero-car-img-wrap"
        style={{ transform: `translateX(${parallaxX}px)` }}
        aria-hidden="true"
      >
        <Image
          className="hero-car-img"
          src="/Car Image 1.png"    // Put file at public/Car-Image-1.png
          alt="Car"
          width={900}               // intrinsic dimensions; adjust as needed
          height={450}
          priority
        />
      </div>
    </section>
  );
};

export default HomeHero;