'use client';
import { motion } from 'motion/react';
import { ParallaxImage } from '@/components/sections/Hero';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const StrategyOverview = () => (
  <section id="strategy" className="section-padding bg-white relative z-10">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center min-w-0">
      <motion.div className="order-2 lg:order-none min-w-0" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.1, 0)}>
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Our Approach</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-8 md:mb-10">Strategy Overview</motion.h2>
        <div className="space-y-7 sm:space-y-10">
          {[
            { title: 'Data-Driven Insights', desc: 'We process petabytes of market data to identify non-obvious correlations and structural inefficiencies.' },
            { title: 'Adaptive Algorithms', desc: 'Our models continuously evolve, learning from market feedback to maintain performance in changing regimes.' },
            { title: 'Rigorous Backtesting', desc: 'Every strategy undergoes exhaustive historical simulation and stress testing before deployment.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={reveal} transition={{ delay: i * 0.1, duration: 0.55, ease: easeOut }} whileHover={{ x: 4, transition: { duration: 0.25 } }} className="flex gap-4 sm:gap-6">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={reveal} transition={{ delay: i * 0.1 + 0.15, type: 'spring', stiffness: 260, damping: 18 }} className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-gold font-serif">
                {i + 1}
              </motion.div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-serif text-navy mb-2">{item.title}</h3>
                <p className="text-navy/60 text-sm sm:text-base font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="relative order-1 lg:order-none min-w-0 w-full">
        <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -1 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={reveal} transition={{ duration: 0.7, ease: easeOut }} className="shadow-xl sm:shadow-2xl">
          <ParallaxImage src="/approach-visual.png" alt="Strategy and growth visualization" className="w-full aspect-[4/3] max-h-[260px] min-[480px]:max-h-[300px] sm:max-h-[360px] md:max-h-none sm:aspect-auto object-cover object-center" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={reveal} transition={{ delay: 0.15, duration: 0.55, ease: easeOut }} className="mt-6 sm:mt-8 lg:absolute lg:-bottom-8 xl:-bottom-10 lg:-left-6 xl:-left-10 bg-navy p-6 sm:p-8 text-white max-w-full lg:max-w-xs shadow-lg">
          <p className="text-gold font-serif text-base sm:text-lg italic leading-relaxed">"Alpha is found in the patterns others ignore."</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StrategyOverview;
