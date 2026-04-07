'use client';
import { ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { fadeUpItem, staggerContainer, reveal, easeOut } from "@/lib/motion";

const RiskDisclosure = () => {
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
              style={{ fontFamily: "'Prata', serif" }}
            >
              Risk <span className="text-gold opacity-90">Disclosure.</span>
            </motion.h1>
            <motion.div variants={fadeUpItem} className="flex items-center gap-4 text-white/50 uppercase tracking-[0.2em] text-[10px] font-bold">
              <ShieldCheck size={18} className="text-gold" />
              <span>Institutional Version • Effective 1 April 2026</span>
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
                <span className="text-gold text-lg opacity-50 font-serif">01.</span> Introduction
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>1.1 This Risk Disclosure Statement sets out the key risks associated with financial markets, trading strategies, and the use of research, technology, and investment-related insights provided by QuantRidge.</p>
                <p>1.2 All users should carefully consider these risks before making any financial decisions.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">02.</span> No Advice
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>2.1 QuantRidge does not provide financial, investment, legal, or tax advice.</p>
                <p>2.2 All content is provided for informational and research purposes only.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">03.</span> Market Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>3.1 Financial markets are volatile and subject to rapid and unpredictable changes.</p>
                <p>3.2 Prices may move against positions, resulting in losses.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">04.</span> Leverage Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>4.1 Use of leverage may amplify gains and losses.</p>
                <p>4.2 Losses may exceed initial capital.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">05.</span> Model and Strategy Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>5.1 Quantitative strategies may fail under certain market conditions.</p>
                <p>5.2 Historical performance and backtests do not guarantee future results.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">06.</span> Technology Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>6.1 System failures, latency, or disruptions may impact execution.</p>
                <p>6.2 Reliance on automated systems involves inherent risks.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">07.</span> Liquidity Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>7.1 Certain markets or instruments may have limited liquidity.</p>
                <p>7.2 This may impact the ability to enter or exit positions.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">08.</span> Counterparty Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>8.1 Users are exposed to risks related to brokers, custodians, and financial institutions.</p>
                <p>8.2 Failure of counterparties may result in losses.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">09.</span> Regulatory Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>9.1 Changes in laws or regulations may impact trading strategies and operations.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">10.</span> Data and Information Risk
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>10.1 Data used in analysis may be incomplete or inaccurate.</p>
                <p>10.2 Decisions based on such data carry inherent risk.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">11.</span> No Guarantee of Returns
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>11.1 There is no guarantee of profitability or performance.</p>
                <p>11.2 Users may lose part or all of their capital.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">12.</span> User Responsibility
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>12.1 Users are solely responsible for their own decisions and outcomes.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">13.</span> Limitation of Liability
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>13.1 QuantRidge shall not be liable for any losses arising from reliance on its content or systems.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={reveal} transition={{ duration: 0.6, ease: easeOut }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-navy mb-8 flex items-baseline gap-4">
                <span className="text-gold text-lg opacity-50 font-serif">14.</span> Acknowledgement
              </h2>
              <div className="space-y-6 text-navy/70 text-lg sm:text-xl font-light leading-relaxed">
                <p>14.1 By using QuantRidge platforms, users acknowledge and accept these risks.</p>
              </div>
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

export default RiskDisclosure;
