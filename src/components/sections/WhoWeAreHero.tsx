'use client';
import { motion } from 'motion/react';
import { staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const WhoWeAreHero = () => (
  <section className="relative min-h-[90dvh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-navy text-white">
    {/* Dynamic Background Pattern */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      <img 
        src="/who_we_are_hero_bg_1778662433218.png" 
        alt="Institutional Environment" 
        className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer(0.12, 0.1)}
        className="max-w-4xl"
      >
        <motion.div variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.6em] mb-8 border-l-2 border-gold pl-4">
          The Firm
        </motion.div>
        
        <motion.h1 variants={fadeUpItem} className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-10 leading-[1] tracking-tight">
          Where Logic <br />
          <span className="text-gold italic">Meets Capital.</span>
        </motion.h1>
        
        <motion.div variants={fadeUpItem} className="h-px w-24 bg-gold/50 mb-10" />
        
        <motion.p variants={fadeUpItem} className="text-white/70 text-xl md:text-3xl leading-relaxed font-light max-w-2xl">
          QuantRidge is an institutional-grade quantitative trading firm built on the foundations of scientific discovery, engineering excellence, and unwavering risk discipline.
        </motion.p>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
    >
      <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60 font-bold rotate-90 mb-8">Scroll</span>
      <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
    </motion.div>
  </section>
);

export default WhoWeAreHero;
