'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const WhoWeWorkWith = () => (
  <section id="who-we-are" className="section-padding pt-16 pb-0 sm:pt-[150px] sm:pb-[200px] !min-h-fit bg-white relative z-10">
    <motion.div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 px-2" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.12, 0)}>
      <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">Partnerships</motion.p>
      <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl font-serif text-navy">Who We Work With</motion.h2>
    </motion.div>
    <motion.div className="max-w-5xl mx-auto px-4" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.55, ease: easeOut }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-8 md:gap-12 items-center justify-items-center opacity-40 grayscale">
        {['INSTITUTIONAL', 'ENDOWMENTS', 'PENSIONS', 'SOVEREIGN'].map((label, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: i * 0.1, duration: 0.45, ease: easeOut }} className="text-[11px] min-[380px]:text-xs sm:text-sm md:text-lg lg:text-xl font-serif font-bold text-navy text-center leading-tight px-0.5">
            {label}
          </motion.div>
        ))}
      </div>
    </motion.div>
    <motion.div className="mt-8 md:mt-12 max-w-3xl mx-auto text-center px-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: 0.1, duration: 0.55, ease: easeOut }}>
      <p className="text-navy/60 leading-relaxed italic text-sm sm:text-base">
        "QuantRidge Capital partners with sophisticated institutional investors who share our long-term vision and commitment to systematic excellence."
      </p>
    </motion.div>
  </section>
);

export default WhoWeWorkWith;
