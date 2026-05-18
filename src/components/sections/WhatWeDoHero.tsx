'use client';
import { motion } from 'motion/react';
import { staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const WhatWeDoHero = () => (
  <section className="relative min-h-[80dvh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
    {/* Dynamic Background Pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0A1F44 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
    </div>
    
    {/* Background Image / Pattern */}
    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 lg:opacity-20 pointer-events-none">
      <img 
        src="/premium_mountain_rigor_1778142315279.png" 
        alt="Stability and Rigor" 
        className="w-full h-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer(0.12, 0.1)}
        className="max-w-4xl"
      >
        <motion.div variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.6em] mb-8 border-l-2 border-gold pl-4">
          QuantRidge Research
        </motion.div>
        
        <motion.h1 variants={fadeUpItem} className="text-5xl md:text-7xl lg:text-8xl font-serif text-navy mb-10 leading-[1.1] tracking-tight">
          Scientific Rigor. <br />
          <span className="text-gold italic">Market Intelligence.</span>
        </motion.h1>
        
        <motion.div variants={fadeUpItem} className="h-px w-24 bg-gold/30 mb-10" />
        
        <motion.p variants={fadeUpItem} className="text-navy/70 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
          We bridge the gap between mathematical theory and global execution, managing capital through clinical objectivity and technical excellence.
        </motion.p>
      </motion.div>
    </div>

    {/* Dynamic Stats Bar */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-0 left-0 w-full bg-navy/5 border-t border-gray-100 py-6 overflow-hidden hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center whitespace-nowrap">
        {[
          { label: 'Market Coverage', val: '70+ Exchanges' },
          { label: 'Data Processing', val: '1.2 PB / Day' },
          { label: 'System Uptime', val: '99.99%' },
          { label: 'Execution Speed', val: '< 100μs' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-1 border-r border-navy/10 pr-12 last:border-0">
            <span className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">{stat.label}</span>
            <span className="text-navy font-serif text-lg">{stat.val}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default WhatWeDoHero;
