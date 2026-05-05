'use client';
import { motion } from 'motion/react';
import { Globe, Zap, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { reveal, easeOut } from '@/lib/motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-navy text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-14 mb-12 sm:mb-16 relative z-10">
        <motion.div className="lg:col-span-1" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.55, ease: easeOut }}>
          <Logo light />
          <p className="mt-8 text-white/50 text-sm max-w-md leading-relaxed font-light">
            QuantRidge Capital is a global investment management firm specializing in quantitative trading strategies. We combine mathematical rigor with technological innovation.
          </p>
          <div className="mt-10 flex gap-6">
            {[
              { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              { label: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
            ].map(({ label, path }) => (
              <a key={label} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <span className="sr-only">{label}</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d={path} /></svg>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: 0.08, duration: 0.55, ease: easeOut }}>
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Home</a></li>
            <li><a href="#what-we-do" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> What We Do</a></li>
            <li><a href="#strategy" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Strategy</a></li>
            <li><a href="#markets" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Markets</a></li>
            <li><a href="#risk" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={12} /> Risk Management</a></li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: 0.14, duration: 0.55, ease: easeOut }}>
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Newsletter</h4>
          <p className="text-sm text-white/50 mb-6 font-light">Subscribe to receive our latest market insights and firm updates.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20" />
            <button className="w-full bg-gold text-navy py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">Subscribe</button>
          </form>
        </motion.div>

        <motion.div className="flex flex-col justify-between" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ delay: 0.2, duration: 0.55, ease: easeOut }}>
          <div>
            <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li className="flex gap-3"><Globe size={16} className="text-gold shrink-0" /><span>78 Shenton Way<br />Tower 2, #06-15/16/17<br />Singapore (079120)</span></li>
              <li className="flex gap-3"><Zap size={16} className="text-gold shrink-0" /><a href="mailto:enquiries@quantridge.com" className="hover:text-gold transition-colors">enquiries@quantridge.com</a></li>
              <li className="flex gap-3"><Phone size={16} className="text-gold shrink-0" /><span className="hover:text-gold transition-colors">+65 8282 8223</span></li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div className="max-w-7xl mx-auto pt-8 border-t border-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={reveal} transition={{ delay: 0.1, duration: 0.5 }}>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          <div className="max-w-3xl w-full min-w-0 order-2 lg:order-1">
            <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest mb-6">© 2026 QuantRidge Capital Management LP. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-6 sm:gap-8 w-full lg:w-auto order-1 lg:order-2 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
            <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
              <a href="#" className="hover:text-gold transition-colors py-2 sm:py-0">Privacy Policy</a>
              <Link href="/terms-of-use" className="hover:text-gold transition-colors py-2 sm:py-0">Terms of Use</Link>
              <Link href="/risk-disclosure" className="hover:text-gold transition-colors py-2 sm:py-0">Risk Disclosure</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
