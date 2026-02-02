
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500`}>
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="font-bold text-white text-xs">XT</span>
          </div>
          <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            XTRACT
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.5 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-purple-500 border border-purple-400/30"
        >
          Book a call
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
