'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';

const GlobalPresence = () => (
  <section className="py-24 md:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={reveal} 
          variants={staggerContainer(0.1, 0)}
          className="order-2 lg:order-1"
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6">Global Scale</motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">Unified Network. <br /><span className="text-gold italic">Global Impact.</span></h2>
          <motion.p variants={fadeUpItem} className="text-navy/60 text-lg leading-relaxed font-light mb-12">
            Our systems operate across a distributed global architecture, connecting major financial hubs in real-time. This allows us to maintain a continuous, 24/7 presence in the world's most liquid markets.
          </motion.p>
          
          <div className="flex gap-12">
            {[
              { label: "Execution Hubs", val: "12" },
              { label: "Asset Classes", val: "8" },
              { label: "Countries", val: "30+" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUpItem}>
                <p className="text-3xl font-serif text-gold mb-1">{stat.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={reveal}
          transition={{ duration: 1, ease: easeOut }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            <img 
              src="/global_presence_map_abstract_1778142951568.png" 
              alt="Global Map" 
              className="w-full rounded-sm shadow-2xl"
            />
            {/* Animated Pulses */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gold rounded-full animate-ping" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gold rounded-full animate-ping delay-700" />
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-gold rounded-full animate-ping delay-1000" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GlobalPresence;
