'use client';
import { motion } from 'motion/react';
import { reveal, staggerContainer, fadeUpItem } from '@/lib/motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactDetails = () => {
  const offices = [
    {
      city: 'Singapore',
      address: '78 Shenton Way, Tower 2, #06-15/16/17, Singapore (079120)',
      email: 'enquiries@quantridge.com',
      phone: '+65 8282 8223',
      hours: 'Mon - Fri: 09:00 - 18:00 (SGT)'
    }
  ];

  return (
    <section className="py-20 bg-navy text-white overflow-hidden relative">
       {/* Background Ornament */}
       <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
       
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={staggerContainer(0.12, 0)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div>
            <motion.h4 variants={fadeUpItem} className="text-gold font-sans font-bold text-xs uppercase tracking-[0.3em] mb-6">
              Global Presence
            </motion.h4>
            <motion.h2 variants={fadeUpItem} className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 max-w-lg leading-tight">
              Located in the heart of <span className="text-gold">financial hubs.</span>
            </motion.h2>
            <motion.p variants={fadeUpItem} className="text-white/50 text-base sm:text-lg mb-12 max-w-md font-light">
              Our presence in key financial centers ensures we remain connected to global markets and our institutional partners.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            {offices.map((office, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpItem}
                className="bg-navy-light/30 border border-white/5 p-8 sm:p-12 rounded-2xl hover:border-gold/30 transition-all duration-500 group"
              >
                <h3 className="text-2xl font-serif text-white mb-8 group-hover:text-gold transition-colors">{office.city}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="text-gold shrink-0 w-5 h-5" />
                    <span className="text-white/60 font-light text-sm sm:text-base leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-gold shrink-0 w-5 h-5" />
                    <span className="text-white/60 font-light text-sm sm:text-base">{office.email}</span>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-gold shrink-0 w-5 h-5" />
                    <span className="text-white/60 font-light text-sm sm:text-base">{office.phone}</span>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-gold shrink-0 w-5 h-5" />
                    <span className="text-white/60 font-light text-sm sm:text-base">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;
