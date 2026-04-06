'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const PerformancePhilosophy = () => (
  <section className="section-padding !pt-[100px] !pb-[150px] bg-white relative z-10">
    <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.12, 0)}>
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">Philosophy</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-center font-serif text-navy mb-6 md:mb-8 px-1 text-xl sm:text-4xl md:text-5xl">Performance Philosophy</motion.h2>
        <motion.p variants={fadeUpItem} className="text-base sm:text-lg md:text-xl text-navy/70 leading-relaxed mb-10 md:mb-12 font-serif italic max-w-3xl mx-auto">
          "We do not seek to predict the future; we seek to understand the probabilities of the present. Sustainable performance is the result of disciplined process, not lucky guesses."
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl sm:max-w-none mx-auto sm:mx-0">
        {[
          { t: 'Consistency', s: 'Over volatility' },
          { t: 'Process', s: 'Over outcomes' },
          { t: 'Discipline', s: 'Over intuition' },
        ].map((row, i) => (
          <motion.div key={row.t} initial={{ opacity: 0, y: 28, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={reveal} transition={{ delay: i * 0.12, duration: 0.55, ease: easeOut }} whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }} className="p-6 sm:p-8 border border-gray-50 rounded-sm hover:border-gold/20 hover:shadow-md transition-shadow duration-300">
            <p className="text-2xl sm:text-3xl font-serif text-navy mb-2">{row.t}</p>
            <p className="text-xs text-navy/50 uppercase tracking-widest">{row.s}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PerformancePhilosophy;
