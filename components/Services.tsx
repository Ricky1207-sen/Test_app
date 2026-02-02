
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-6 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold tracking-widest uppercase"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            AI Solutions That Take Your <br /> Business to the Next Level
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            We design, develop, and implement automation tools that help you work smarter, not harder.
          </motion.p>
        </div>

        {/* Service Item 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
              <div className="bg-[#0b0b1a] rounded-[22px] overflow-hidden aspect-video flex items-center justify-center">
                 {/* Simulated Automation Interface */}
                 <div className="w-full h-full p-8 relative">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-4 w-32 bg-white/10 rounded" />
                      <div className="h-8 w-8 bg-purple-600/30 rounded-full" />
                    </div>
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * i }}
                        className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-3/4 bg-white/20 rounded" />
                          <div className="h-2 w-1/2 bg-white/10 rounded" />
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-green-500/50" />
                      </motion.div>
                    ))}
                    <div className="absolute bottom-8 right-8">
                       <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-purple-600 rounded-full blur-xl"
                       />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4 block">Workflow Automation</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Automate repetitive tasks</h3>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains, saving time and cutting down errors.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium">Internal Task Bots</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium">100+ Automations</span>
            </div>
          </motion.div>
        </div>

        {/* Service Item 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4 block">AI Assistant</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Delegate Daily Tasks</h3>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium">Summaries</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium">Scheduling</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
              <div className="bg-[#0b0b1a] rounded-[22px] overflow-hidden aspect-video relative flex items-center justify-center p-12">
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full max-w-[300px] aspect-square bg-gradient-to-tr from-purple-900 to-indigo-700 rounded-3xl relative flex items-center justify-center p-6 shadow-2xl shadow-purple-500/20"
                >
                  <div className="absolute inset-4 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-4">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/30" />
                    </motion.div>
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
                </motion.div>
                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, (i % 2 === 0 ? 20 : -20), 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                    className="absolute w-2 h-2 rounded-full bg-purple-500 blur-sm"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
