'use client';
import { motion } from 'motion/react';
import { BarChart3, Zap, Globe, Layers } from 'lucide-react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const WhatWeDo = () => (
  <section id="what-we-do" className="section-padding bg-white relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-12 md:mb-20" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.14, 0)}>
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Expertise</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6 md:mb-8 px-1 sm:px-2 text-balance">Systematic Excellence.</motion.h2>
        <motion.p variants={fadeUpItem} className="text-navy/60 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg font-light px-2">
          We operate at the intersection of quantitative research and high-performance engineering, managing capital across diverse asset classes globally.
        </motion.p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {[
          { icon: BarChart3, title: 'Quantitative Research', desc: 'Developing proprietary signals through rigorous statistical analysis and machine learning.' },
          { icon: Zap, title: 'High-Frequency Execution', desc: 'Low-latency infrastructure designed to capture fleeting market opportunities with surgical precision.' },
          { icon: Globe, title: 'Global Macro', desc: 'Analyzing cross-border capital flows and economic indicators to identify structural shifts.' },
          { icon: Layers, title: 'Multi-Strategy', desc: 'A diversified approach that balances risk across uncorrelated alpha sources.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: i * 0.09, duration: 0.58, ease: easeOut }} whileHover={{ y: -5, transition: { duration: 0.28, ease: easeOut } }} className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-gold/30 hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300 group rounded-sm">
            <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
              <item.icon className="text-navy group-hover:text-gold transition-colors" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-serif text-navy mb-3 sm:mb-4 leading-snug">{item.title}</h3>
            <p className="text-navy/60 text-sm leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDo;
