'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  return (
    <div ref={ref} className="overflow-hidden rounded-sm">
      <motion.img style={{ y, willChange: 'transform' }} src={src} alt={alt} className={className ?? 'block w-full min-h-[160px] sm:min-h-[200px] scale-[1.06] object-cover object-center'} />
    </div>
  );
};

const HeroChartCard = ({ className = '' }: { className?: string }) => (
  <div className={`relative z-30 w-full max-w-lg mx-auto lg:max-w-none min-w-0 min-h-[220px] opacity-100 ${className}`}>
    <div className="relative z-10 bg-white p-4 sm:p-6 md:p-8 xl:p-12 border border-gray-100 rounded-sm shadow-md">
      <div className="flex justify-between items-start sm:items-end gap-3 mb-6 sm:mb-8 md:mb-12">
        <div className="min-w-0 pr-2">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold font-bold mb-1 sm:mb-2">Market Volatility Index</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-navy leading-tight">Global Alpha Stream</p>
        </div>
        <div className="p-2 sm:p-3 bg-gold/10 rounded-full shrink-0">
          <TrendingUp className="text-gold w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
        </div>
      </div>
      <div className="h-44 sm:h-52 md:h-64 flex items-end gap-1 sm:gap-2 md:gap-3 min-h-[176px]">
        {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.2, delay: 0.15 + i * 0.06, ease: 'circOut' }} className={`flex-1 min-w-[6px] rounded-t-sm transition-colors duration-500 hover:bg-gold ${i % 3 === 0 ? 'bg-gold/80' : 'bg-navy/10'}`} />
        ))}
      </div>
    </div>
    <div className="hidden sm:block pointer-events-none absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-t border-r border-gold/20 -z-10" />
    <div className="hidden sm:block pointer-events-none absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-b border-l border-navy/10 -z-10" />
  </div>
);

const Hero = () => (
  <section className="relative min-h-[100dvh] min-h-screen pt-[calc(6.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(8.25rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16 md:pb-20 overflow-x-hidden overflow-y-visible bg-white">
    <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start relative z-10">
      <div className="mt-2 sm:mt-5 lg:mt-0 min-w-0 flex flex-col">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1, 0.05)}>
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-navy/5 text-navy text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6 sm:mb-8 rounded-full border border-navy/10 max-w-full">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse shrink-0" />
            <span className="leading-snug">Institutional Grade Quantitative Trading</span>
          </motion.div>
          <motion.h1 variants={fadeUpItem} className="text-[2rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-navy leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8 tracking-tighter max-lg:overflow-x-auto lg:overflow-visible lg:text-balance">
            <span className="block whitespace-nowrap lg:hidden">Precision in <span className="text-gold">Complexity.</span></span>
            <span className="hidden lg:block">Precision in</span>
            <span className="hidden lg:block text-gold">Complexity.</span>
          </motion.h1>
        </motion.div>
        <div className="block w-full max-lg:mb-8 lg:hidden"><HeroChartCard className="mt-1 sm:mt-2" /></div>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.08, 0.02)}>
          <motion.p variants={fadeUpItem} className="text-[15px] sm:text-lg md:text-xl text-navy/70 max-w-lg mb-8 sm:mb-12 leading-relaxed font-light">
            QuantRidge Capital leverages advanced mathematical models and cutting-edge technology to capture alpha in global financial markets.
          </motion.p>
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <button type="button" className="bg-navy text-white w-full sm:w-64 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-all duration-500 flex items-center justify-center gap-3 group rounded-md">
              Explore Strategies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button type="button" className="border border-navy/10 text-navy w-full sm:w-64 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-500 rounded-md">
              Our Principles
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="hidden lg:flex lg:items-start min-w-0 pt-4 xl:pt-0"><HeroChartCard /></div>
    </div>
  </section>
);

export { ParallaxImage };
export default Hero;
