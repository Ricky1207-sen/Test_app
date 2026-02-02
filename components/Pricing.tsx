
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: ["Basic automation", "AI Email support", "3 Task bots", "Standard analytics"],
    recommended: false
  },
  {
    name: "Business",
    price: "$999",
    features: ["Advanced workflows", "Priority AI response", "Unlimited Task bots", "Advanced dashboard", "Custom integration"],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Full AI infrastructure", "Dedicated AI team", "On-premise deployment", "SLA guarantees", "Custom security"],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            The Best AI Automation, <br /> at the Right Price
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Choose a plan that fits your business needs and start automating with AI today.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Use React.FC to fix TypeScript error regarding the 'key' prop being passed in maps
const PricingCard: React.FC<{ plan: typeof plans[0], delay: number }> = ({ plan, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-8 rounded-3xl border ${
        plan.recommended ? 'bg-white/[0.05] border-purple-500 shadow-2xl shadow-purple-500/10' : 'bg-white/[0.02] border-white/10'
      } flex flex-col h-full overflow-hidden group`}
    >
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
          Best Value
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold">{plan.price}</span>
        {plan.price !== "Custom" && <span className="text-white/50 text-sm">/mo</span>}
      </div>

      <ul className="space-y-4 mb-12 flex-1">
        {plan.features.map(feature => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
            <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
        plan.recommended 
        ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/20' 
        : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}>
        {plan.price === "Custom" ? "Contact sales" : "Get started"}
      </button>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default Pricing;
