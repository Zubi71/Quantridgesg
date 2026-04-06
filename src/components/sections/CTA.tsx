'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const CTA = () => (
  <section className="pb-16 sm:pb-24 md:pb-28 lg:pb-32 pt-0 !min-h-fit bg-navy px-3 sm:px-6 relative z-10">
    <motion.div className="max-w-5xl mx-auto bg-navy p-6 sm:p-12 md:p-16 lg:p-24 text-center shadow-none" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={reveal} transition={{ duration: 0.65, ease: easeOut }}>
      <motion.div initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.11, 0.05)}>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
          Ready to explore the <br className="hidden sm:block" />
          <span className="text-gold italic">next frontier?</span>
        </motion.h2>
        <motion.p variants={fadeUpItem} className="text-white/60 text-base sm:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-light">
          Connect with our institutional relations team to learn more about our investment strategies and partnership opportunities.
        </motion.p>
        <motion.div variants={fadeUpItem}>
          <button type="button" className="bg-gold text-navy px-10 sm:px-12 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-md w-full sm:w-auto">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default CTA;
