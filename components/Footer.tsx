
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative bg-[#030014]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xs">XT</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter">XTRACT</span>
          </div>
          <p className="text-white/40 max-w-sm mb-8">
            The world's leading AI automation platform for high-growth modern businesses. Streamlining complexity, empowering intelligence.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="twitter" />
            <SocialIcon icon="github" />
            <SocialIcon icon="linkedin" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 XTRACT AI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <motion.div
    whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
  >
    <div className="w-4 h-4 bg-white/20 rounded-sm" />
  </motion.div>
);

export default Footer;
