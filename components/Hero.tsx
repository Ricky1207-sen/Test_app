
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Cosmic AI Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center max-w-4xl mx-auto">
        {/* New Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-block px-3 py-1 mb-8 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold tracking-widest uppercase"
        >
          New Features Live
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]"
        >
          Intelligent Automation for <br className="hidden md:block" /> Modern Businesses.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Xtract brings AI automation to your fingertips & streamlines tasks. Experience the next generation of productivity tools.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-purple-600 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-all hover:bg-purple-500 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 font-bold">Get in touch ↗</span>
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
            View services
          </button>
        </motion.div>
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-32 w-full max-w-5xl px-4"
      >
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/30 mb-8 font-medium">Over 50+ businesses trust us</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <LogoPlaceholder name="Loom" />
          <LogoPlaceholder name="Linear" />
          <LogoPlaceholder name="Stripe" />
          <LogoPlaceholder name="Framer" />
        </div>
      </motion.div>

      {/* Background stars */}
      <div className="absolute inset-0 z-[-1]">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
    </section>
  );
};

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-6 h-6 rounded bg-white/20 transition-transform group-hover:scale-110" />
    <span className="font-bold text-lg tracking-tight">{name}</span>
  </div>
);

export default Hero;
