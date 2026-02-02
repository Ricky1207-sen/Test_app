
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    icon: "⚡"
  },
  {
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    icon: "🤝"
  },
  {
    title: "24/7 Availability",
    description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    icon: "⏰"
  },
  {
    title: "Cost Reduction",
    description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation.",
    icon: "💰"
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    icon: "📊"
  },
  {
    title: "Scalability & Growth",
    description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    icon: "📈"
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-[#05001a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-mesh pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase"
          >
            Benefits
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            The Key Benefits of AI <br /> for Your Business Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={benefit.title} benefit={benefit} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Use React.FC to fix TypeScript error regarding the 'key' prop being passed in maps
const BenefitCard: React.FC<{ benefit: typeof benefits[0], delay: number }> = ({ benefit, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 transition-all hover:bg-white/[0.05] hover:border-purple-500/30 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-600/20 group-hover:border-purple-500/50">
          {benefit.icon}
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
        <p className="text-white/50 leading-relaxed font-light text-sm">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

export default Benefits;
