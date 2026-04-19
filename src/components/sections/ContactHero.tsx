'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut, floating } from '@/lib/motion';

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 bg-navy overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={floating.animate}
          className="absolute top-[10%] left-[-10%] w-[40%] h-[60%] bg-gold/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{
            ...floating.animate,
            y: [0, 15, 0],
            transition: { ...floating.animate.transition, delay: 1 }
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-navy-light/30 blur-[100px] rounded-full" 
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.12, 0)}
        >
          <motion.h4 variants={fadeUpItem} className="text-gold font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-6">
            Institutional Partnership
          </motion.h4>
          <motion.h1 
            variants={fadeUpItem} 
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-8 leading-[1.1]"
          >
            Connect with our <br />
            <span className="text-gold">Global Team</span>
          </motion.h1>
          <motion.p 
            variants={fadeUpItem} 
            className="text-white/60 text-lg sm:text-xl md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            QuantRidge Capital operates at the intersection of mathematical rigor and technological innovation. Reach out to discuss how our strategies can align with your institutional objectives.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
