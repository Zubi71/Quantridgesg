'use client';
import { motion } from 'motion/react';
import { staggerContainer, fadeUpItem, reveal } from '@/lib/motion';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    image: '/leadership_1_ceo_1778663528218.png',
    bio: 'Former head of quantitative research at a Tier-1 investment bank with over 20 years of experience in systemic trading.'
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/leadership_2_cto_1778663812483.png',
    bio: 'Pioneered low-latency execution systems and high-performance computing architectures for global trading desks.'
  },
  {
    name: 'David Vance',
    role: 'Head of Quantitative Strategy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'PhD in Theoretical Physics from Cambridge. Specialises in multi-asset volatility modelling and risk decomposition.'
  }
];

const Leadership = () => (
  <section className="py-24 md:py-32 bg-navy text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={reveal}
        variants={staggerContainer(0.12, 0.1)}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <motion.div variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
          The Leadership
        </motion.div>
        <motion.h2 variants={fadeUpItem} className="text-4xl md:text-5xl font-serif text-white mb-8">
          Built by Practitioners. <br />
          <span className="italic text-gold">Led by Excellence.</span>
        </motion.h2>
        <motion.p variants={fadeUpItem} className="text-white/60 text-lg leading-relaxed">
          Our team combines decades of institutional expertise with the agility of a technology firm, ensuring every strategy is backed by world-class experience.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={reveal}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-navy-light mb-6">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="relative">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-serif text-white">{leader.name}</h3>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">{leader.role}</p>
                </div>
                <a href="#" className="text-white/40 hover:text-gold transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {leader.bio}
              </p>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/20 group-hover:border-gold transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
