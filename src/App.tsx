/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import {
  TrendingUp,
  Shield,
  Globe,
  Zap,
  BarChart3,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Layers,
  Activity,
  Cpu,
  CreditCard,
  DollarSign,
  Droplets,
} from "lucide-react";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Easing used for scroll reveals — smooth, not bouncy */
const easeOut = [0.22, 1, 0.36, 1] as const;

const reveal = {
  once: true as const,
  amount: 0.12 as const,
  margin: "0px 0px -10% 0px" as const,
};

const itemDuration = 0.62;

/** Staggered section headers & blocks */
const staggerContainer = (stagger = 0.11, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren, ease: easeOut },
  },
});

const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: itemDuration, ease: easeOut },
  },
};

/** Parallax image — subtle vertical drift while scrolling */
const ParallaxImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  return (
    <div ref={ref} className="overflow-hidden rounded-sm">
      <motion.img
        style={{ y, willChange: "transform" }}
        src={src}
        alt={alt}
        className={className ?? "block w-full min-h-[160px] sm:min-h-[200px] scale-[1.06] object-cover object-center"}
      />
    </div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold z-[100] origin-left pointer-events-none"
      style={{ scaleX }}
      aria-hidden
    />
  );
};

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2 sm:gap-4 min-w-0">
    <div className="flex-shrink-0 w-9 sm:w-[46px]">
      <svg className="w-full h-auto" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bar 1 - Gold */}
        <path d="M4 18L12 14V32H4V18Z" fill="#C5A059" />
        {/* Bar 2 - Gold */}
        <path d="M13 12L21 8V32H13V12Z" fill="#C5A059" />
        {/* Bar 3 - Navy */}
        <path d="M22 6L30 2V32H22V6Z" fill={light ? "#FFFFFF" : "#0A1F44"} />
        {/* The White Line - Zig Zag following the bars */}
        <path d="M2 32L12 22L21 26L30 8" stroke={light ? "#C5A059" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom thin line shadow */}
        <rect x="2" y="32" width="28" height="0.5" fill={light ? "white" : "#0A1F44"} fillOpacity="0.1" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-lg sm:text-[22px] md:text-[28px] font-serif font-bold leading-none tracking-tight text-gold uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
        QuantRidge
      </span>
      <div className="flex items-center gap-2 mt-1">
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/20' : 'bg-navy/30'}`} />
        <span className={`text-[10px] font-sans tracking-[0.5em] font-bold uppercase ${light ? 'text-white/70' : 'text-navy/70'}`}>
          Capital
        </span>
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/20' : 'bg-navy/30'}`} />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  // placeholder_for_replace
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 32);
    if (v > 80) {
      setHidden(v > prev);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.38, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b supports-[backdrop-filter]:bg-white/80 transition-shadow duration-500 pt-[env(safe-area-inset-top,0px)] ${
        scrolled ? "border-gray-200/80 shadow-lg shadow-navy/[0.06]" : "border-gray-100 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 min-h-[3.75rem] sm:min-h-[4.5rem] sm:h-20 flex items-center justify-between gap-3 py-2 sm:py-0">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {['What We Do', 'Strategy', 'Markets', 'Risk', 'Who We Are'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <button className="bg-navy text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 rounded-md">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle — min 44px touch target */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-navy min-h-11 min-w-11 inline-flex items-center justify-center rounded-md -mr-1 active:bg-navy/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="lg:hidden overflow-hidden bg-white border-b border-gray-100"
          >
            <div className="p-4 sm:p-6 flex flex-col gap-1 sm:gap-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              {['What We Do', 'Strategy', 'Markets', 'Risk', 'Who We Are'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-base sm:text-lg font-medium text-navy active:text-gold transition-colors py-3 sm:py-1 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                type="button"
                className="bg-navy text-white px-6 py-3 text-sm font-bold uppercase tracking-widest mt-2 rounded-md"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

/** Bar chart card — plain wrapper so mobile never inherits parent motion opacity / variants */
const HeroChartCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative z-30 w-full max-w-lg mx-auto lg:max-w-none min-w-0 min-h-[220px] opacity-100 ${className}`}
  >
    <div className="relative z-10 bg-white p-4 sm:p-6 md:p-8 xl:p-12 border border-gray-100 rounded-sm shadow-md">
      <div className="flex justify-between items-start sm:items-end gap-3 mb-6 sm:mb-8 md:mb-12">
        <div className="min-w-0 pr-2">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold font-bold mb-1 sm:mb-2">
            Market Volatility Index
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-navy leading-tight">
            Global Alpha Stream
          </p>
        </div>
        <div className="p-2 sm:p-3 bg-gold/10 rounded-full shrink-0">
          <TrendingUp className="text-gold w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
        </div>
      </div>
      <div className="h-44 sm:h-52 md:h-64 flex items-end gap-1 sm:gap-2 md:gap-3 min-h-[176px]">
        {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1.2, delay: 0.15 + i * 0.06, ease: "circOut" }}
            className={`flex-1 min-w-[6px] rounded-t-sm transition-colors duration-500 hover:bg-gold ${i % 3 === 0 ? "bg-gold/80" : "bg-navy/10"}`}
          />
        ))}
      </div>
    </div>
    <div className="hidden sm:block pointer-events-none absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-t border-r border-gold/20 -z-10" />
    <div className="hidden sm:block pointer-events-none absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-b border-l border-navy/10 -z-10" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] min-h-screen pt-[calc(6.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(8.25rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16 md:pb-20 overflow-x-hidden overflow-y-visible bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start relative z-10">
        {/* Left column: text — chart is NOT inside this motion tree (avoids variant / opacity bugs on small screens) */}
        <div className="mt-2 sm:mt-5 lg:mt-0 min-w-0 flex flex-col">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1, 0.05)}>
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-navy/5 text-navy text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6 sm:mb-8 rounded-full border border-navy/10 max-w-full"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse shrink-0" />
              <span className="leading-snug">Institutional Grade Quantitative Trading</span>
            </motion.div>
            <motion.h1
              variants={fadeUpItem}
              className="text-[2rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-navy leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8 tracking-tighter max-lg:overflow-x-auto max-lg:[scrollbar-width:thin] lg:overflow-visible lg:text-balance"
            >
              {/* Below lg: one line only (nowrap). lg+: two lines. */}
              <span className="block whitespace-nowrap lg:hidden">
                Precision in <span className="italic text-gold">Complexity.</span>
              </span>
              {/* lg+: two lines like before */}
              <span className="hidden lg:block">Precision in</span>
              <span className="hidden lg:block italic text-gold">Complexity.</span>
            </motion.h1>
          </motion.div>

          {/* Mobile / tablet: chart — sibling of motion blocks, always in document flow, max-lg only */}
          <div className="block w-full max-lg:mb-8 lg:hidden">
            <HeroChartCard className="mt-1 sm:mt-2" />
          </div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.08, 0.02)}>
            <motion.p
              variants={fadeUpItem}
              className="text-[15px] sm:text-lg md:text-xl text-navy/70 max-w-lg mb-8 sm:mb-12 leading-relaxed font-light"
            >
              QuantRidge Capital leverages advanced mathematical models and cutting-edge technology to capture alpha in global financial markets.
            </motion.p>
            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <button
                type="button"
                className="bg-navy text-white w-full sm:w-64 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-all duration-500 flex items-center justify-center gap-3 group rounded-md"
              >
                Explore Strategies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                className="border border-navy/10 text-navy w-full sm:w-64 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-500 rounded-md"
              >
                Our Principles
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop: chart right column */}
        <div className="hidden lg:flex lg:items-start min-w-0 pt-4 xl:pt-0">
          <HeroChartCard />
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="section-padding bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.14, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">
            Expertise
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6 md:mb-8 px-1 sm:px-2 text-balance"
          >
            Systematic Excellence.
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-navy/60 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg font-light px-2"
          >
            We operate at the intersection of quantitative research and high-performance engineering, managing capital across diverse asset classes globally.
          </motion.p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: BarChart3, title: "Quantitative Research", desc: "Developing proprietary signals through rigorous statistical analysis and machine learning." },
            { icon: Zap, title: "High-Frequency Execution", desc: "Low-latency infrastructure designed to capture fleeting market opportunities with surgical precision." },
            { icon: Globe, title: "Global Macro", desc: "Analyzing cross-border capital flows and economic indicators to identify structural shifts." },
            { icon: Layers, title: "Multi-Strategy", desc: "A diversified approach that balances risk across uncorrelated alpha sources." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={reveal}
              transition={{ delay: i * 0.09, duration: 0.58, ease: easeOut }}
              whileHover={{ y: -5, transition: { duration: 0.28, ease: easeOut } }}
              className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-gold/30 hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300 group rounded-sm"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <item.icon className="text-navy group-hover:text-gold transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-navy mb-3 sm:mb-4 leading-snug">{item.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CorePrinciples = () => {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.13, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">
            Foundation
          </motion.p>
          <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            Core Principles
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden">
          {[
            { title: "Integrity", desc: "Our reputation is our most valuable asset. We maintain the highest ethical standards in every interaction." },
            { title: "Innovation", desc: "We constantly challenge conventional wisdom, seeking better ways to solve complex problems." },
            { title: "Meritocracy", desc: "The best ideas win. We foster an environment where talent and results are the only metrics that matter." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={reveal}
              transition={{ delay: i * 0.12, duration: 0.58, ease: easeOut }}
              whileHover={{ scale: 1.01, transition: { duration: 0.35 } }}
              className={`p-6 sm:p-10 md:p-16 ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-white/10' : ''} hover:bg-white/5 transition-colors duration-700 group cursor-default`}
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-serif text-gold/20 group-hover:text-gold/50 transition-colors mb-6 sm:mb-10 block">0{i+1}</span>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-gold">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-light text-base sm:text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Markets = () => {
  const markets = [
    { name: 'Equities', icon: TrendingUp, code: 'EQT' },
    { name: 'Fixed Income', icon: BarChart3, code: 'FI' },
    { name: 'Commodities', icon: Droplets, code: 'CMD' },
    { name: 'Currencies', icon: DollarSign, code: 'FX' },
    { name: 'Derivatives', icon: Activity, code: 'DRV' },
    { name: 'Digital Assets', icon: Cpu, code: 'DGT' },
    { name: 'Credit', icon: CreditCard, code: 'CRD' },
    { name: 'Emerging Markets', icon: Globe, code: 'EM' }
  ];

  return (
    <section id="markets" className="section-padding bg-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-stretch lg:items-end mb-16 md:mb-24 gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.1, 0)}
        >
          <motion.div variants={fadeUpItem} className="max-w-2xl">
            <p className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">Global Reach</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-6 md:mb-8">Dynamic Markets</h2>
            <p className="text-navy/60 text-base sm:text-lg font-light leading-relaxed">
              We deploy capital across the world's most liquid and complex financial markets, operating 24/7 to capture global opportunities.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUpItem}
            className="flex flex-wrap gap-4 sm:gap-6 justify-start lg:justify-end shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={reveal}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-center flex-1 min-w-[140px] sm:flex-none px-8 sm:px-10 py-6 sm:py-8 bg-navy text-white rounded-sm shadow-xl shadow-navy/10"
            >
              <p className="text-4xl sm:text-5xl font-serif text-gold mb-2">50+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Exchanges</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={reveal}
              transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
              className="text-center flex-1 min-w-[140px] sm:flex-none px-8 sm:px-10 py-6 sm:py-8 bg-white border border-gray-100 rounded-sm"
            >
              <p className="text-4xl sm:text-5xl font-serif text-navy mb-2">24/7</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-navy/50 font-bold">Operations</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-2xl shadow-navy/5">
          {markets.map((market, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={reveal}
              transition={{ delay: i * 0.055, duration: 0.5, ease: easeOut }}
              whileHover={{ backgroundColor: '#0A1F44', color: '#ffffff', y: -3 }}
              className="p-5 sm:p-8 md:p-10 lg:p-12 bg-white flex flex-col justify-between group cursor-default transition-all duration-500 min-h-[160px] sm:min-h-[220px] md:min-h-[260px] relative overflow-hidden min-w-0"
            >
              {/* Background Code Accent */}
              <span className="absolute -right-4 -bottom-4 text-9xl font-serif font-bold text-navy/[0.02] group-hover:text-white/[0.03] transition-colors pointer-events-none uppercase">
                {market.code}
              </span>

              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <market.icon size={20} className="text-navy group-hover:text-gold transition-colors" />
                </div>
                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity font-mono">
                  {market.code}
                </span>
              </div>

              <div className="relative z-10">
                <div className="h-[1px] w-8 bg-gold mb-6 group-hover:w-full transition-all duration-700" />
                <div className="flex items-start justify-between gap-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-serif tracking-tight leading-snug break-words pr-1">
                    {market.name}
                  </span>
                  <ArrowRight size={20} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shrink-0 mt-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrategyOverview = () => {
  return (
    <section id="strategy" className="section-padding bg-white relative z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center min-w-0">
        <motion.div
          className="order-2 lg:order-none min-w-0"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.1, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">
            Our Approach
          </motion.p>
          <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-8 md:mb-10">
            Strategy Overview
          </motion.h2>
          <div className="space-y-7 sm:space-y-10">
            {[
              { title: "Data-Driven Insights", desc: "We process petabytes of market data to identify non-obvious correlations and structural inefficiencies." },
              { title: "Adaptive Algorithms", desc: "Our models continuously evolve, learning from market feedback to maintain performance in changing regimes." },
              { title: "Rigorous Backtesting", desc: "Every strategy undergoes exhaustive historical simulation and stress testing before deployment." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={reveal}
                transition={{ delay: i * 0.1, duration: 0.55, ease: easeOut }}
                whileHover={{ x: 4, transition: { duration: 0.25 } }}
                className="flex gap-4 sm:gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={reveal}
                  transition={{ delay: i * 0.1 + 0.15, type: "spring", stiffness: 260, damping: 18 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-gold font-serif"
                >
                  {i + 1}
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-serif text-navy mb-2">{item.title}</h3>
                  <p className="text-navy/60 text-sm sm:text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="relative order-1 lg:order-none min-w-0 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={reveal}
            transition={{ duration: 0.7, ease: easeOut }}
            className="shadow-xl sm:shadow-2xl"
          >
            <ParallaxImage
              src="/approach-visual.png"
              alt="Strategy and growth visualization"
              className="w-full aspect-[4/3] max-h-[260px] min-[480px]:max-h-[300px] sm:max-h-[360px] md:max-h-none sm:aspect-auto object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={reveal}
            transition={{ delay: 0.15, duration: 0.55, ease: easeOut }}
            className="mt-6 sm:mt-8 lg:absolute lg:-bottom-8 xl:-bottom-10 lg:-left-6 xl:-left-10 bg-navy p-6 sm:p-8 text-white max-w-full lg:max-w-xs shadow-lg"
          >
            <p className="text-gold font-serif text-base sm:text-lg italic leading-relaxed">
              "Alpha is found in the patterns others ignore."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PerformancePhilosophy = () => {
  return (
    <section className="section-padding !pt-[100px] !pb-[150px] bg-white relative z-10">
      <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.12, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Philosophy
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="text-center font-serif text-navy mb-6 md:mb-8 px-1 text-xl sm:text-4xl md:text-5xl"
          >
            Performance Philosophy
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-base sm:text-lg md:text-xl text-navy/70 leading-relaxed mb-10 md:mb-12 font-serif italic max-w-3xl mx-auto"
          >
            "We do not seek to predict the future; we seek to understand the probabilities of the present. Sustainable performance is the result of disciplined process, not lucky guesses."
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl sm:max-w-none mx-auto sm:mx-0">
          {[
            { t: "Consistency", s: "Over volatility" },
            { t: "Process", s: "Over outcomes" },
            { t: "Discipline", s: "Over intuition" },
          ].map((row, i) => (
            <motion.div
              key={row.t}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={reveal}
              transition={{ delay: i * 0.12, duration: 0.55, ease: easeOut }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
              className="p-6 sm:p-8 border border-gray-50 rounded-sm hover:border-gold/20 hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-2xl sm:text-3xl font-serif text-navy mb-2">{row.t}</p>
              <p className="text-xs text-navy/50 uppercase tracking-widest">{row.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RiskManagement = () => {
  return (
    <section id="risk" className="section-padding bg-navy text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.12, 0)}
        >
          <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 md:mb-6">
            Security
          </motion.p>
          <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8">
            Risk Management
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-white/60 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg font-light">
            Risk management is the foundation of our trading. Our proprietary risk engine monitors thousands of parameters in real-time to ensure capital preservation.
          </motion.p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: "Real-time Monitoring", desc: "Continuous surveillance of position limits and market exposure." },
            { title: "Stress Testing", desc: "Simulating extreme market scenarios to ensure portfolio resilience." },
            { title: "Liquidity Analysis", desc: "Ensuring all positions can be exited efficiently under stress." },
            { title: "Operational Redundancy", desc: "Fail-safe systems across all critical trading infrastructure." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={reveal}
              transition={{ delay: i * 0.08, duration: 0.52, ease: easeOut }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-6 sm:p-8 border border-white/10 hover:border-gold/50 hover:bg-white/[0.03] transition-colors duration-300 rounded-sm"
            >
              <Shield className="text-gold mb-5 sm:mb-6" size={32} />
              <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeWorkWith = () => {
  return (
    <section id="who-we-are" className="section-padding pt-16 pb-0 sm:pt-[150px] sm:pb-[200px] !min-h-fit bg-white relative z-10">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16 px-2"
        initial="hidden"
        whileInView="visible"
        viewport={reveal}
        variants={staggerContainer(0.12, 0)}
      >
        <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">
          Partnerships
        </motion.p>
        <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl font-serif text-navy">
          Who We Work With
        </motion.h2>
      </motion.div>
      <motion.div
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={reveal}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-8 md:gap-12 items-center justify-items-center opacity-40 grayscale">
          {['INSTITUTIONAL', 'ENDOWMENTS', 'PENSIONS', 'SOVEREIGN'].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={reveal}
              transition={{ delay: i * 0.1, duration: 0.45, ease: easeOut }}
              className="text-[11px] min-[380px]:text-xs sm:text-sm md:text-lg lg:text-xl font-serif font-bold text-navy text-center leading-tight px-0.5"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="mt-8 md:mt-12 max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={reveal}
        transition={{ delay: 0.1, duration: 0.55, ease: easeOut }}
      >
        <p className="text-navy/60 leading-relaxed italic text-sm sm:text-base">
          "QuantRidge Capital partners with sophisticated institutional investors who share our long-term vision and commitment to systematic excellence."
        </p>
      </motion.div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="pb-16 sm:pb-24 md:pb-28 lg:pb-32 pt-0 !min-h-fit bg-navy px-3 sm:px-6 relative z-10">
      <motion.div
        className="max-w-5xl mx-auto bg-navy p-6 sm:p-12 md:p-16 lg:p-24 text-center shadow-none"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={reveal}
        transition={{ duration: 0.65, ease: easeOut }}
      >
        <motion.div initial="hidden" whileInView="visible" viewport={reveal} variants={staggerContainer(0.11, 0.05)}>
          <motion.h2
            variants={fadeUpItem}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight"
          >
            Ready to explore the <br className="hidden sm:block" />
            <span className="text-gold italic">next frontier?</span>
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-white/60 text-base sm:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-light"
          >
            Connect with our institutional relations team to learn more about our investment strategies and partnership opportunities.
          </motion.p>
          <motion.div variants={fadeUpItem}>
            <button
              type="button"
              className="bg-gold text-navy px-10 sm:px-12 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-md w-full sm:w-auto"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-navy text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-14 mb-12 sm:mb-16 relative z-10">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={reveal}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <Logo light />
          <p className="mt-8 text-white/50 text-sm max-w-md leading-relaxed font-light">
            QuantRidge Capital is a global investment management firm specializing in quantitative trading strategies. We combine mathematical rigor with technological innovation.
          </p>
          <div className="mt-10 flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
              <span className="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
              <span className="sr-only">Instagram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.365-.333 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.365-.062-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.365.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.365.062-2.633.332-3.608 1.308-.975.975-1.247 2.242-1.308 3.607-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.365.332 2.633 1.308 3.608.975.975 2.242 1.247 3.607 1.308 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.365-.062 2.633-.332 3.608-1.308.975-.975 1.247-2.242 1.308-3.607.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.365-.332-2.633-1.308-3.608-.975-.975-2.242-1.247-3.607-1.308-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
              <span className="sr-only">Facebook</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={reveal}
          transition={{ delay: 0.08, duration: 0.55, ease: easeOut }}
        >
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Home</a></li>
            <li><a href="#what-we-do" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> What We Do</a></li>
            <li><a href="#strategy" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Strategy</a></li>
            <li><a href="#markets" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Markets</a></li>
            <li><a href="#risk" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Risk Management</a></li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={reveal}
          transition={{ delay: 0.14, duration: 0.55, ease: easeOut }}
        >
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Newsletter</h4>
          <p className="text-sm text-white/50 mb-6 font-light">Subscribe to receive our latest market insights and firm updates.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
              />
            </div>
            <button className="w-full bg-gold text-navy py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
              Subscribe
            </button>
          </form>
        </motion.div>

        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={reveal}
          transition={{ delay: 0.2, duration: 0.55, ease: easeOut }}
        >
          <div>
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li className="flex gap-3">
                <Globe size={16} className="text-gold shrink-0" />
                <span>One Financial Plaza, Suite 2400<br />New York, NY 10004</span>
              </li>
              <li className="flex gap-3">
                <Zap size={16} className="text-gold shrink-0" />
                <a href="mailto:info@quantridge.com" className="hover:text-gold transition-colors">info@quantridge.com</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="max-w-7xl mx-auto pt-8 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={reveal}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          <div className="max-w-3xl w-full min-w-0 order-2 lg:order-1">
            <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest mb-6">
              © 2026 QuantRidge Capital Management LP. All rights reserved.
            </p>
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Disclaimer:</p>
              <p className="text-[9px] sm:text-[10px] text-white/20 leading-relaxed uppercase tracking-wider text-pretty">
                The information provided on this website is for informational purposes only and does not constitute investment advice, a recommendation, or an offer of any services or products for sale. Investment in financial instruments involves significant risk and may result in the loss of capital. Past performance is not indicative of future results. QuantRidge Capital is not responsible for any decisions made based on the information provided herein. Access to this website is subject to our terms of use and privacy policy.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-6 sm:gap-8 w-full lg:w-auto order-1 lg:order-2 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
            <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
              <a href="#" className="hover:text-gold transition-colors py-2 sm:py-0">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors py-2 sm:py-0">Terms</a>
              <a href="#" className="hover:text-gold transition-colors py-2 sm:py-0">Cookies</a>
            </div>
            
            <button 
              type="button"
              onClick={scrollToTop}
              className="flex items-center justify-center sm:justify-start gap-2 text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors group border-t border-white/10 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8 lg:pl-12 min-h-11 sm:min-h-0"
            >
              Back to Top <ArrowRight size={12} className="-rotate-90 group-hover:-translate-y-1 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      // DESKTOP: original diagonal stacking animation
      const sections = gsap.utils.toArray(".diagonal-section") as HTMLElement[];
      const vh = window.innerHeight;

      const sectionData = sections.map((section, i) => {
        const scrollHeight = section.scrollHeight;
        const overflow = Math.max(0, scrollHeight - vh);
        const arrivalUnits = i === 0 ? 0 : 1;
        const internalUnits = overflow / vh;
        return { section, arrivalUnits, internalUnits, overflow };
      });

      const totalUnits = sectionData.reduce(
        (sum, d) => sum + d.arrivalUnits + d.internalUnits,
        0
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalUnits * vh}`,
          invalidateOnRefresh: true,
        },
      });

      let cursor = 0;

      sectionData.forEach(({ section, arrivalUnits, internalUnits, overflow }, i) => {
        gsap.set(section, { zIndex: i + 1 });
        const isFooter = section.classList.contains("footer-section");

        if (i > 0) {
          tl.fromTo(
            section,
            { xPercent: isFooter ? 0 : -100, yPercent: 100, opacity: 0.5, scale: 0.95 },
            { xPercent: 0, yPercent: 0, opacity: 1, scale: 1, ease: "none", duration: arrivalUnits },
            cursor
          );
          cursor += arrivalUnits;
        }

        if (overflow > 0) {
          tl.to(section, { y: -overflow, ease: "none", duration: internalUnits }, cursor);
          cursor += internalUnits;
        }
      });

      return;
    }

    // MOBILE: slide-from-bottom with rounded corners
    // Single pinned timeline - same structure as desktop but:
    //   No xPercent (straight from bottom), rounded top corners (24px)
    //   WhoWeWorkWith(7) + CTA(8) share ONE arrival animation + scroll together
    //   Footer slides straight up, no rounding
    //
    // Section indices:
    //   Hero(0), WhatWeDo(1), CorePrinciples(2), Markets(3),
    //   StrategyOverview(4), PerformancePhilosophy(5), RiskManagement(6),
    //   WhoWeWorkWith(7), CTA(8), Footer(9)

    const allSections = gsap.utils.toArray(".diagonal-section") as HTMLElement[];
    const vh = window.innerHeight;
    const ROUND = "24px 24px 0 0";

    // For the grouped pair (7+8):
    // CTA sits below WhoWeWorkWith in y-space (at top: whoScrollHeight).
    // Both animate in together (one entry tween), then both scroll up together.
    // The combined content height = who.scrollHeight + cta.scrollHeight.
    // Combined overflow = combinedH - vh (how much we need to scroll to see it all).
    //
    // When we start scrolling the combined group:
    //   y = 0 → top of WhoWeWorkWith visible
    //   y = -who.scrollHeight → top of CTA visible (WhoWeWorkWith scrolled away)
    //   y = -(who.scrollHeight + cta.scrollHeight - vh) → bottom of CTA visible

    const whoSection = allSections[7];
    const ctaSection = allSections[8];

    const riskSection = allSections[6];
    if (riskSection && whoSection && ctaSection) {
      // Risk is at top: 0 by default. Who follows Risk. CTA follows Who.
      gsap.set(whoSection, { top: riskSection.scrollHeight });
      gsap.set(ctaSection, { top: riskSection.scrollHeight + whoSection.scrollHeight });
    }

    interface MobileSectionData {
      section: HTMLElement;
      partner?: HTMLElement; partners?: HTMLElement[];
      arrivalUnits: number;
      internalUnits: number;
      overflow: number;
      skip?: boolean;
    }

    const sectionData: MobileSectionData[] = allSections.map((section, i) => {
      if (i === 0) {
        const overflow = Math.max(0, section.scrollHeight - vh);
        return { section, arrivalUnits: 0, internalUnits: overflow / vh, overflow };
      }
      if (i === 6) {
        // Group: Risk (6) + Who (7) + CTA (8) into one tall scrolling block
        const who = allSections[7];
        const cta = allSections[8];
        const combinedH = section.scrollHeight + who.scrollHeight + cta.scrollHeight;
        const combinedOverflow = Math.max(0, combinedH - vh);
        return { section, partners: [who, cta], arrivalUnits: 1, internalUnits: combinedOverflow / vh, overflow: combinedOverflow };
      }
      if (i === 7 || i === 8) {
        return { section, arrivalUnits: 0, internalUnits: 0, overflow: 0, skip: true };
      }
      const overflow = Math.max(0, section.scrollHeight - vh);
      return { section, arrivalUnits: 1, internalUnits: overflow / vh, overflow };
    });

    const totalUnits = sectionData.reduce((sum, d) => sum + d.arrivalUnits + d.internalUnits, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalUnits * vh}`,
        invalidateOnRefresh: true,
      },
    });

    let cursor = 0;

    sectionData.forEach(({ section, partner, partners, arrivalUnits, internalUnits, overflow, skip }, i) => {
      if (skip) return;

      gsap.set(section, { zIndex: i + 1 });
      const isFooter = section.classList.contains("footer-section");

      // Phase 1: slide in from bottom with rounded top corners
      if (i > 0 && arrivalUnits > 0) {
        const partnersList = partners ? partners : (partner ? [partner] : []);
        if (partnersList.length > 0) {
          partnersList.forEach((p, idx) => gsap.set(p, { zIndex: i + idx + 2 }));
          tl.fromTo(
            [section, ...partnersList],
            { y: vh, opacity: 0, borderRadius: ROUND },
            { y: 0, opacity: 1, borderRadius: ROUND, ease: "none", duration: arrivalUnits },
            cursor
          );
        } else {
          tl.fromTo(
            section,
            { y: vh, opacity: 0, borderRadius: ROUND },
            {
              y: 0,
              opacity: 1,
              borderRadius: isFooter ? "0px" : ROUND,
              ease: "none",
              duration: arrivalUnits,
            },
            cursor
          );
        }
        cursor += arrivalUnits;
      }

      // Phase 2: internal scroll for tall sections / combined panels
      if (overflow > 0) {
        const targets = partners ? [section, ...partners] : (partner ? [section, partner] : [section]);
        tl.to(targets, { y: -overflow, ease: "none", duration: internalUnits }, cursor);
        cursor += internalUnits;
      }
    });

  }, { scope: containerRef });

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-navy">
        <ScrollProgress />
        <Navbar />

        <main ref={containerRef} className="diagonal-container">
          <section className="diagonal-section bg-white">
            <Hero />
          </section>
          <section className="diagonal-section bg-white">
            <WhatWeDo />
          </section>
          <section className="diagonal-section bg-navy">
            <CorePrinciples />
          </section>
          <section className="diagonal-section bg-white">
            <Markets />
          </section>
          <section className="diagonal-section bg-white">
            <StrategyOverview />
          </section>
          <section className="diagonal-section bg-white">
            <PerformancePhilosophy />
          </section>
          <section className="diagonal-section bg-navy">
            <RiskManagement />
          </section>
          {/* WhoWeWorkWith + CTA share one bottom animation on mobile */}
          <section className="diagonal-section mobile-group-first max-sm:!min-h-fit bg-white">
            <WhoWeWorkWith />
          </section>
          <section className="diagonal-section mobile-group-second max-sm:!min-h-fit bg-navy">
            <CTA />
          </section>
          {/* Footer */}
          <section className="diagonal-section footer-section bg-navy">
            <Footer />
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
