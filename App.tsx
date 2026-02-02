
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis with a more robust setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Use the official raf loop suggestion
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Add a small delay to ensure DOM is ready and height is calculated
    const timeoutId = setTimeout(() => {
      lenis.resize();
    }, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#030014] text-white selection:bg-purple-600/30">
      {/* Background stays fixed and behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-900/10 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-violet-900/15 blur-[150px] rounded-full" />
      </div>

      <Navbar />
      
      {/* Content wrapper - Removed overflow-x-clip which can sometimes conflict with Lenis on certain browsers */}
      <main className="relative z-10 w-full">
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
};

export default App;
