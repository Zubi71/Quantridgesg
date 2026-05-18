'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem } from '@/lib/motion';
import { Search, Cpu, BarChart, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Intelligence Gathering",
    desc: "Our systems ingest terabytes of diverse data daily—from traditional market feeds to non-traditional alternative signals—ensuring our models have the highest fidelity inputs.",
    metric: "1PB+",
    metricLabel: "Daily Data Processing",
    image: "/intelligence_gathering_abstract_1778143846006.png"
  },
  {
    icon: Cpu,
    title: "Algorithmic Synthesis",
    desc: "We apply sophisticated machine learning and statistical techniques to identify persistent anomalies. Our focus is on low-correlation alpha sources that provide stable returns.",
    metric: "10k+",
    metricLabel: "Proprietary Alphas",
    image: "/algorithmic_synthesis_abstract_1778143871590.png"
  },
  {
    icon: BarChart,
    title: "Systematic Construction",
    desc: "Portfolio construction is fully automated and objective. We optimize for risk-adjusted returns while adhering to institutional-grade liquidity and capacity constraints.",
    metric: "24/7",
    metricLabel: "Global Execution",
    image: "/systematic_construction_abstract_1778143898603.png"
  }
];

const InvestmentApproach = () => (
  <section className="py-24 md:py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        className="text-center mb-24"
        initial="hidden" 
        whileInView="visible" 
        viewport={reveal} 
        variants={staggerContainer(0.1, 0)}
      >
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6">Our Methodology</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8">Industrial-Scale Data Science.</motion.h2>
        <motion.div variants={fadeUpItem} className="h-px w-24 bg-gold/20 mx-auto" />
      </motion.div>

      <div className="space-y-24 md:space-y-40">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={reveal}
            variants={staggerContainer(0.1, 0)}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
          >
            <div className="flex-1">
              <motion.div variants={fadeUpItem} className="inline-flex items-center gap-4 text-gold mb-6">
                <span className="text-4xl font-serif italic opacity-30">0{i + 1}</span>
                <div className="h-px w-12 bg-gold/30" />
              </motion.div>
              <motion.h3 variants={fadeUpItem} className="text-3xl md:text-4xl font-serif text-navy mb-6">{step.title}</motion.h3>
              <motion.p variants={fadeUpItem} className="text-navy/60 text-lg leading-relaxed font-light mb-8 max-w-xl">
                {step.desc}
              </motion.p>
              <motion.div variants={fadeUpItem} className="flex gap-12 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-2xl font-serif text-gold leading-none mb-1">{step.metric}</p>
                  <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">{step.metricLabel}</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeUpItem}
              className="flex-1 w-full aspect-square md:aspect-video bg-navy/5 rounded-sm overflow-hidden relative group shadow-2xl shadow-navy/10"
            >
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-700" />
              
              {/* Floating Icon Overlay */}
              <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rounded-sm text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <step.icon size={28} />
              </div>

              {/* Animated corner accents */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/30 group-hover:border-gold transition-colors duration-500" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/30 group-hover:border-gold transition-colors duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentApproach;
