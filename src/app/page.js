'use client';

import React, { useEffect, useState } from 'react';
import Hero from './home/page';
import './index.css';
import LogoLoop from './Logo Section/page';
import PageLoader from './PageLoader';
import MagicBentoSection from './Magic Bento/page';
import GradientBlindsSection from './GradientBlinds/page';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const t = setTimeout(() => setLoading(false), 900); // adjust duration
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <Hero />
      <LogoLoop />
      <MagicBentoSection />
      {/* <GradientBlindsSection /> */}
    </>
  );
}

export default App;