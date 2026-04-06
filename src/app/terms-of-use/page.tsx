'use client';
import { ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { fadeUpItem, staggerContainer, reveal, easeOut } from "@/lib/motion";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer(0.1, 0)}
          >
            <motion.p variants={fadeUpItem} className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-6">Governance</motion.p>
            <motion.h1 
              variants={fadeUpItem} 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Terms of <span className="italic text-gold opacity-90">Use.</span>
            </motion.h1>
            <motion.div variants={fadeUpItem} className="flex items-center gap-4 text-white/50 uppercase tracking-[0.2em] text-[10px] font-bold">
              <ShieldCheck size={18} className="text-gold" />
              <span>Institutional Version • Effective April 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-16 sm:gap-24">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">01.</span> Introduction
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>1.1 These Terms of Use govern your access to and use of the QuantRidge website, platforms and materials.</p>
                <p>1.2 By accessing this website, you agree to be bound by these Terms.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">02.</span> Regulatory Positioning
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>2.1 QuantRidge provides research, technology, and investment-related insights only.</p>
                <p>2.2 Nothing on this website constitutes financial advice, an offer, or solicitation to invest.</p>
                <p>2.3 QuantRidge does not provide regulated fund management services.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">03.</span> No Reliance
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>3.1 Information provided is for general informational purposes only.</p>
                <p>3.2 Users should not rely on any content as investment advice.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">04.</span> Risk Disclosure
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>4.1 Trading and investing involve significant risk.</p>
                <p>4.2 Past performance is not indicative of future results.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">05.</span> Intellectual Property
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>5.1 All content, systems, and materials are owned by QuantRidge.</p>
                <p>5.2 Users may not copy, reproduce, or distribute without consent.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">06.</span> User Obligations
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>6.1 Users must not misuse the website or attempt unauthorised access.</p>
                <p>6.2 Users must not reverse engineer or exploit QuantRidge systems.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">07.</span> Limitation of Liability
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>7.1 QuantRidge shall not be liable for any losses arising from use of this website.</p>
                <p>7.2 All use is at the user's own risk.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">08.</span> Third-Party Links
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>8.1 QuantRidge may include links to third-party services.</p>
                <p>8.2 We are not responsible for external content or services.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <div className="px-8 py-10 bg-navy/5 border-l-4 border-gold rounded-sm">
                <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-6 flex items-baseline gap-4">
                  <span className="text-gold text-lg italic opacity-50 font-serif">09.</span> Termination
                </h2>
                <p className="text-navy/70 text-lg sm:text-xl font-light leading-relaxed italic">
                  9.1 QuantRidge reserves the right to restrict or terminate access at its discretion.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic opacity-50 font-serif">10.</span> Governing Law
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>10.1 These Terms are governed by the laws of Singapore.</p>
                <p>10.2 Disputes shall be subject to Singapore courts.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg italic font-serif opacity-50">11.</span> Updates
              </h2>
              <p className="text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                11.1 These Terms may be updated from time to time.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }} className="pt-20 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-12 text-center sm:text-left">
              <div>
                <p className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Support & Inquiries</p>
                <a href="mailto:enquiries@quantridge.com" className="text-2xl sm:text-3xl font-serif text-navy hover:text-gold transition-all duration-300 flex items-center justify-center sm:justify-start gap-4">
                  <Mail size={24} /> enquiries@quantridge.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                 <Link href="/" className="bg-navy text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 rounded-md">
                  Return to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
