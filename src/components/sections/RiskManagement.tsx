'use client';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const RiskManagement = () => (
  <section id="risk" className="section-padding bg-navy text-white relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div className="text-center mb-12 md:mb-20 px-2" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.12, 0)}>
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Security</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8">Risk Management</motion.h2>
        <motion.p variants={fadeUpItem} className="text-white/60 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg font-light">
          Risk management is the foundation of our trading. Our proprietary risk engine monitors thousands of parameters in real-time to ensure capital preservation.
        </motion.p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          { title: 'Real-time Monitoring', desc: 'Continuous surveillance of position limits and market exposure.' },
          { title: 'Stress Testing', desc: 'Simulating extreme market scenarios to ensure portfolio resilience.' },
          { title: 'Liquidity Analysis', desc: 'Ensuring all positions can be exited efficiently under stress.' },
          { title: 'Operational Redundancy', desc: 'Fail-safe systems across all critical trading infrastructure.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: i * 0.08, duration: 0.52, ease: easeOut }} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="p-6 sm:p-8 border border-white/10 hover:border-gold/50 hover:bg-white/[0.03] transition-colors duration-300 rounded-sm">
            <Shield className="text-gold mb-5 sm:mb-6" size={32} />
            <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RiskManagement;
