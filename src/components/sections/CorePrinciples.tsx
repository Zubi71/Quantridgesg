'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const CorePrinciples = () => (
  <section className="section-padding bg-navy text-white relative overflow-hidden z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div className="text-center mb-12 md:mb-20 px-2" initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.13, 0)}>
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Foundation</motion.p>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">Core Principles</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden">
        {[
          { title: 'Integrity', desc: 'Our reputation is our most valuable asset. We maintain the highest ethical standards in every interaction.' },
          { title: 'Innovation', desc: 'We constantly challenge conventional wisdom, seeking better ways to solve complex problems.' },
          { title: 'Meritocracy', desc: 'The best ideas win. We foster an environment where talent and results are the only metrics that matter.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 32, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={reveal} transition={{ delay: i * 0.12, duration: 0.58, ease: easeOut }} whileHover={{ scale: 1.01, transition: { duration: 0.35 } }} className={`p-6 sm:p-10 md:p-16 ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-white/10' : ''} hover:bg-white/5 transition-colors duration-700 group cursor-default`}>
            <span className="text-5xl sm:text-6xl md:text-7xl font-serif text-gold/20 group-hover:text-gold/50 transition-colors mb-6 sm:mb-10 block">0{i + 1}</span>
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-gold">{item.title}</h3>
            <p className="text-white/60 leading-relaxed font-light text-base sm:text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CorePrinciples;
