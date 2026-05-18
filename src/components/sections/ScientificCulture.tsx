'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem } from '@/lib/motion';

const ScientificCulture = () => (
  <section className="py-24 bg-navy text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-20">
      <img 
        src="/scientific_collaboration_abstract_1778142970725.png" 
        alt="Scientific Collaboration" 
        className="w-full h-full object-cover grayscale"
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={reveal} 
          variants={staggerContainer(0.1, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6">Our Culture</motion.p>
          <motion.h2 variants={fadeUpItem} className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Human Capital. <br />Scientific Focus.</motion.h2>
          <motion.p variants={fadeUpItem} className="text-white/60 text-xl leading-relaxed font-light mb-12">
            We are a firm of lifelong learners. Our team consists of world-class mathematicians, physicists, and engineers who share a passion for solving the world's most difficult financial puzzles.
          </motion.p>
          
          <motion.div variants={fadeUpItem} className="grid sm:grid-cols-2 gap-8">
            <div className="border-l border-gold/30 pl-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Academic Excellence</h4>
              <p className="text-white/40 text-sm leading-relaxed">Collaborative research environment modeled after top-tier academic institutions.</p>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Meritocratic Rigor</h4>
              <p className="text-white/40 text-sm leading-relaxed">Ideas are judged solely on their empirical merit, regardless of tenure or title.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ScientificCulture;
