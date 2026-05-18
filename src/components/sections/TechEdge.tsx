'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem, easeOut } from '@/lib/motion';
import { Zap, Shield, Database, Activity } from 'lucide-react';

const TechEdge = () => (
  <section className="py-24 md:py-32 bg-navy text-white overflow-hidden relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img 
        src="/industrial_scale_data_1778142336434.png" 
        alt="Network" 
        className="w-full h-full object-cover"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={reveal} 
          variants={staggerContainer(0.1, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6">The Platform</motion.p>
          <motion.h2 variants={fadeUpItem} className="text-4xl md:text-5xl lg:text-7xl font-serif mb-10 leading-tight">High-Performance <br /><span className="text-gold italic">Infrastructure.</span></motion.h2>
          <motion.p variants={fadeUpItem} className="text-white/50 text-xl leading-relaxed font-light mb-12 max-w-xl">
            Our proprietary execution stack is engineered for microsecond precision, ensuring our research is translated into market impact with minimal slippage.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-10">
            {[
              { icon: Zap, title: "Low-Latency", desc: "Sub-millisecond market access via co-located exchange infrastructure." },
              { icon: Database, title: "Data Lake", desc: "Petabyte-scale storage for high-speed historical simulation." },
              { icon: Shield, title: "Resilience", desc: "Fault-tolerant systems with 99.999% operational uptime." },
              { icon: Activity, title: "Telemetry", desc: "Real-time monitoring of every signal and execution." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUpItem} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={reveal}
          transition={{ duration: 1, ease: easeOut }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-1 bg-gradient-to-br from-gold/30 to-transparent rounded-sm">
            <img 
              src="/industrial_scale_data_1778142336434.png" 
              alt="Technology" 
              className="w-full aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          {/* Glassmorphism card overlay */}
          <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-sm shadow-2xl max-w-xs z-20">
            <p className="text-gold text-4xl font-serif mb-2">99.9%</p>
            <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold">Uptime Reliability</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechEdge;
