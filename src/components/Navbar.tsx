'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { easeOut } from '@/lib/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 32);
    if (v > 80) setHidden(v > prev);
    else setHidden(false);
  });

  const navItems = ['What We Do', 'Strategy', 'Markets', 'Risk', 'Who We Are'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
      transition={{ duration: 0.38, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b supports-[backdrop-filter]:bg-white/80 transition-shadow duration-500 pt-[env(safe-area-inset-top,0px)] ${
        scrolled ? 'border-gray-200/80 shadow-lg shadow-navy/[0.06]' : 'border-gray-100 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 min-h-[3.75rem] sm:min-h-[4.5rem] sm:h-20 flex items-center justify-between gap-3 py-2 sm:py-0">
        <Logo />
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={isHome ? `#${item.toLowerCase().replace(/\s+/g, '-')}` : `/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors uppercase tracking-wider"
            >
              {item}
            </Link>
          ))}
          <Link href="/contact" className="bg-navy text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 rounded-md">
            Contact Us
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="lg:hidden overflow-hidden bg-white border-b border-gray-100"
          >
            <div className="p-4 sm:p-6 flex flex-col gap-1 sm:gap-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              {navItems.map((item) => (
                <Link 
                  key={item} 
                  href={isHome ? `#${item.toLowerCase().replace(/\s+/g, '-')}` : `/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-base sm:text-lg font-medium text-navy active:text-gold transition-colors py-3 sm:py-1 rounded-md" 
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/contact" className="bg-navy text-white px-6 py-3 text-sm font-bold uppercase tracking-widest mt-2 rounded-md text-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
