'use client';
import { motion } from 'motion/react';
import { reveal, fadeUpItem, easeOut, slideInLeft, slideInRight, floating } from '@/lib/motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative Blob for Glassmorphism */}
      <motion.div 
        animate={floating.animate}
        className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={reveal}
            variants={slideInLeft}
          >
            <h2 className="text-navy text-3xl sm:text-4xl md:text-5xl font-serif mb-8">
              Inquire <br />
              <span className="text-gold">Further</span>
            </h2>
            <p className="text-navy/60 text-lg font-light leading-relaxed mb-10">
              Complete the form below to initiate a dialogue with our global relations team. We typically respond within one business day.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Direct Line', content: '+65 8282 8223' },
                { icon: Mail, label: 'General Inquiry', content: 'enquiries@quantridge.com' },
                { icon: MapPin, label: 'Office Location', content: <>78 Shenton Way<br />Tower 2, #06-15/16/17<br />Singapore (079120)</> },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white shadow-[0_8px_32px_0_rgba(10,31,68,0.05)] hover:bg-white/70 hover:border-gold hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-navy shadow-lg flex items-center justify-center group-hover:bg-gold transition-all duration-300 shrink-0">
                    <item.icon size={18} className="text-white group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-1.5">{item.label}</p>
                    <p className="text-navy font-medium leading-relaxed group-hover:text-gold transition-colors">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={reveal}
            variants={slideInRight}
          >
            <form className="bg-navy p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              {/* Subtle glass effect ornament */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl -mr-32 -mt-32 rounded-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-5 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20 font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="john@institution.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-5 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20 font-light"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="institution" className="text-xs uppercase tracking-widest text-white/40 font-bold">Institutional Affiliation</label>
                  <input 
                    id="institution" 
                    type="text" 
                    placeholder="Name of your firm"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-5 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20 font-light"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/40 font-bold">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="How can we assist you today?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-5 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20 font-light resize-none"
                  />
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-12 w-full bg-gold text-navy py-5 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 relative z-10"
              >
                Submit Inquiry
              </motion.button>
              
              <p className="mt-8 text-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium relative z-10">
                Secure 256-bit encrypted communication
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
