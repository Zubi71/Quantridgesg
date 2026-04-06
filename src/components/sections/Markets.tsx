'use client';
import { motion } from 'motion/react';
import { TrendingUp, BarChart3, DollarSign, Activity, Cpu, CreditCard, Globe, ArrowRight } from 'lucide-react';
import { reveal, fadeUpItem, staggerContainer, easeOut } from '@/lib/motion';
import { Droplets } from 'lucide-react';

const markets = [
  { name: 'Equities', icon: TrendingUp, code: 'EQT' },
  { name: 'Fixed Income', icon: BarChart3, code: 'FI' },
  { name: 'Commodities', icon: Droplets, code: 'CMD' },
  { name: 'Currencies', icon: DollarSign, code: 'FX' },
  { name: 'Derivatives', icon: Activity, code: 'DRV' },
  { name: 'Digital Assets', icon: Cpu, code: 'DGT' },
  { name: 'Credit', icon: CreditCard, code: 'CRD' },
  { name: 'Emerging Markets', icon: Globe, code: 'EM' },
];

const Markets = () => (
  <section id="markets" className="section-padding bg-white overflow-hidden relative z-10">
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-end mb-16 md:mb-24 gap-10 lg:gap-12" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.1, 0)}>
        <motion.div variants={fadeUpItem} className="max-w-2xl">
          <p className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Global Reach</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-6 md:mb-8">Dynamic Markets</h2>
          <p className="text-navy/60 text-base sm:text-lg font-light leading-relaxed">We deploy capital across the world's most liquid and complex financial markets, operating 24/7 to capture global opportunities.</p>
        </motion.div>
        <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4 sm:gap-6 justify-start lg:justify-end shrink-0">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={reveal} transition={{ duration: 0.5, ease: easeOut }} className="text-center flex-1 min-w-[140px] sm:flex-none px-8 sm:px-10 py-6 sm:py-8 bg-navy text-white rounded-sm shadow-xl shadow-navy/10">
            <p className="text-4xl sm:text-5xl font-serif text-gold mb-2">50+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Exchanges</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={reveal} transition={{ duration: 0.5, delay: 0.08, ease: easeOut }} className="text-center flex-1 min-w-[140px] sm:flex-none px-8 sm:px-10 py-6 sm:py-8 bg-white border border-gray-100 rounded-sm">
            <p className="text-4xl sm:text-5xl font-serif text-navy mb-2">24/7</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-navy/50 font-bold">Operations</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-2xl shadow-navy/5">
        {markets.map((market, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: i * 0.055, duration: 0.5, ease: easeOut }} whileHover={{ backgroundColor: '#0A1F44', color: '#ffffff', y: -3 }} className="p-5 sm:p-8 md:p-10 lg:p-12 bg-white flex flex-col justify-between group cursor-default transition-all duration-500 min-h-[160px] sm:min-h-[220px] md:min-h-[260px] relative overflow-hidden min-w-0">
            <span className="absolute -right-4 -bottom-4 text-9xl font-serif font-bold text-navy/[0.02] group-hover:text-white/[0.03] transition-colors pointer-events-none uppercase">{market.code}</span>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <market.icon size={20} className="text-navy group-hover:text-gold transition-colors" />
              </div>
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity font-mono">{market.code}</span>
            </div>
            <div className="relative z-10">
              <div className="h-[1px] w-8 bg-gold mb-6 group-hover:w-full transition-all duration-700" />
              <div className="flex items-start justify-between gap-3">
                <span className="text-lg sm:text-xl md:text-2xl font-serif tracking-tight leading-snug break-words pr-1">{market.name}</span>
                <ArrowRight size={20} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shrink-0 mt-0.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Markets;
