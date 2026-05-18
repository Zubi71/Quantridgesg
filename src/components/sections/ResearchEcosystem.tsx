'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem } from '@/lib/motion';
import { Brain, Network, BarChart4, Microscope, Binary, Globe2 } from 'lucide-react';

const researchAreas = [
  {
    icon: Brain,
    title: "Deep Learning",
    desc: "Utilizing neural architectures to uncover non-linear relationships in multi-dimensional datasets."
  },
  {
    icon: Network,
    title: "Natural Language",
    desc: "Extracting sentiment and structural insights from vast repositories of unstructured textual data."
  },
  {
    icon: BarChart4,
    title: "Statistical Arbitrage",
    desc: "Identifying mean-reverting anomalies through rigorous time-series analysis and cointegration."
  },
  {
    icon: Microscope,
    title: "Microstructure",
    desc: "Analyzing order book dynamics and liquidity profiles at the tick level for optimal execution."
  },
  {
    icon: Binary,
    title: "Genetic Algorithms",
    desc: "Evolving strategy parameters through biological-inspired optimization for robustness."
  },
  {
    icon: Globe2,
    title: "Global Macro",
    desc: "Synthesizing cross-border capital flows and geopolitical signals into systematic indicators."
  }
];

const ResearchEcosystem = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        className="mb-16"
        initial="hidden" 
        whileInView="visible" 
        viewport={reveal} 
        variants={staggerContainer(0.1, 0)}
      >
        <p className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-4">Intellectual Capital</p>
        <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">A Multi-Disciplinary Ecosystem.</h2>
        <p className="text-navy/50 text-lg font-light max-w-2xl leading-relaxed">
          Our research is not siloed. We foster a collaborative environment where physics, mathematics, and computer science converge to solve the most complex problems in finance.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
        {researchAreas.map((area, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={reveal}
            variants={fadeUpItem}
            className="group bg-white p-10 md:p-12 hover:bg-navy transition-all duration-500 cursor-default"
          >
            <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm text-gold mb-8 group-hover:bg-gold group-hover:text-navy transition-colors">
              <area.icon size={24} />
            </div>
            <h3 className="text-xl font-serif text-navy mb-4 group-hover:text-white transition-colors">{area.title}</h3>
            <p className="text-navy/50 text-sm leading-relaxed font-light group-hover:text-white/40 transition-colors">
              {area.desc}
            </p>
            <div className="mt-8 h-px w-0 bg-gold group-hover:w-12 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchEcosystem;
