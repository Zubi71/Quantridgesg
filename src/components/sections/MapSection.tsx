'use client';
import { motion } from 'motion/react';
import { reveal, zoomIn } from '@/lib/motion';

const MapSection = () => {
  // Google Maps Embed URL for "78 Shenton Way, Singapore"
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819077114624!2d103.84719577583626!3d1.2759336617937402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19138d58a9e3%3A0x6a0904944d47d4b4!2s78%20Shenton%20Way!5e0!3m2!1sen!2ssg!4v1713335000000!5m2!1sen!2ssg";

  return (
    <section className="py-0 bg-[#F8FAFC] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 mb-[-100px] relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={reveal}
          variants={zoomIn}
          className="bg-navy p-2 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] border border-white/10"
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </motion.div>
      </div>
      <div className="h-[200px] bg-navy w-full" />
    </section>
  );
};

export default MapSection;
