'use client';
import { motion } from 'motion/react';
import { staggerContainer, fadeUpItem, reveal } from '@/lib/motion';
import { Target, Zap, Shield, Microscope } from 'lucide-react';

const values = [
  {
    icon: Microscope,
    title: 'Scientific Purity',
    desc: 'We treat markets as complex physical systems, applying the same rigor found in high-energy physics to every trade.'
  },
  {
    icon: Zap,
    title: 'Technological Edge',
    desc: 'Our proprietary infrastructure is engineered for microsecond precision and absolute reliability in any market regime.'
  },
  {
    icon: Shield,
    title: 'Risk First',
    desc: 'Alpha is meaningless without protection. Our systems are built to preserve capital through mathematical certainty.'
  },
  {
    icon: Target,
    title: 'Absolute Returns',
    desc: 'We strive for uncorrelated performance that delivers value regardless of broader market trends.'
  }
];

const WhoWeAreVision = () => (
  <section className="py-24 md:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Mission Statement */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
            Our Mission
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="text-4xl md:text-6xl font-serif text-navy leading-tight mb-8">
            Deciphering the <br />
            <span className="italic text-gold">Hidden Order.</span>
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-navy/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            In an era of noise and irrationality, QuantRidge stands as a beacon of mathematical truth. We leverage advanced statistical modelling and machine learning to extract signal from chaos.
          </motion.p>
          <motion.div variants={fadeUpItem} className="flex gap-12 items-center">
            <div>
              <div className="text-4xl font-serif text-navy">2026</div>
              <div className="text-[10px] uppercase tracking-widest text-navy/40 font-bold mt-1">Founded</div>
            </div>
            <div className="w-px h-10 bg-gold/30" />
            <div>
              <div className="text-4xl font-serif text-navy">50+</div>
              <div className="text-[10px] uppercase tracking-widest text-navy/40 font-bold mt-1">PhDs & Engineers</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Core Values Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={reveal}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 border border-navy/5 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 rounded-lg group"
            >
              <div className="w-12 h-12 bg-navy text-gold rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl font-serif text-navy mb-3">{value.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreVision;
