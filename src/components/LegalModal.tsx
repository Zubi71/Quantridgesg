'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

const LegalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Show modal immediately on mount/refresh if on homepage
    if (pathname === '/') {
      setIsOpen(true);
    }
  }, [pathname]);

  const handleAgree = () => {
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!mounted || !isOpen || pathname !== '/') return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-navy px-6 py-8 sm:px-10 border-b border-gold/10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="text-gold" size={28} />
              </div>
              <div>
                <h2 className="text-white font-serif text-2xl sm:text-3xl leading-tight">Legal <span className="text-gold italic">Disclaimer.</span></h2>
                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] mt-1 font-bold">Institutional Access Only</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar overscroll-contain">
              <div className="space-y-10 text-navy/70 leading-relaxed font-light">
                
                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" /> Caution and Important Notice
                  </h3>
                  <p>QUANTRIDGE CAPITAL PTE. LTD. and its affiliates (collectively, “QuantRidge”) have become aware of instances involving fraudulent entities, impersonators, unauthorised websites, applications, and communication channels falsely claiming to be associated with QuantRidge or its representatives.</p>
                  <p className="mt-4">These unauthorised parties may misuse the QuantRidge name, brand, or likeness with the intent to mislead or defraud individuals. QuantRidge does not operate, endorse, or assume any responsibility for such third-party activities, and any engagement with such parties is undertaken entirely at your own risk.</p>
                  <p className="mt-4 italic">All official communications from QuantRidge will only be conducted through verified and authorised channels.</p>
                </section>

                <hr className="border-navy/5" />

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Access Restriction and Investor Representation</h3>
                  <p>This website contains confidential and proprietary information relating to QuantRidge and its investment strategies.</p>
                  <p className="mt-4 font-medium">By clicking “I AGREE” and accessing this website, you represent and warrant that:</p>
                  <ul className="mt-4 space-y-3 list-decimal list-inside marker:text-gold marker:font-bold">
                    <li>You have read, understood, and agree to be bound by the terms set out in this notice</li>
                    <li>You are accessing this website in compliance with all applicable laws and regulations in your jurisdiction</li>
                    <li>You are accessing this information solely for informational purposes and not as a result of any solicitation by QuantRidge</li>
                    <li>Any interaction with QuantRidge was initiated independently by you, without prior direct or indirect solicitation by QuantRidge or its representatives</li>
                    <li>You are an institutional investor, accredited investor, or equivalent professional investor classification under applicable laws</li>
                  </ul>
                </section>

                <hr className="border-navy/5" />

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Jurisdictional Restrictions</h3>
                  <p>The information contained on this website is not intended for distribution to, or use by, any person in any jurisdiction where such distribution or use would be contrary to local laws or regulatory requirements.</p>
                  <p className="mt-4 text-xs italic opacity-60 uppercase tracking-widest">No action has been taken by QuantRidge to permit a public offering of any investment product or service in any jurisdiction.</p>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">No Offer, No Advice</h3>
                  <p>This website is provided strictly for informational purposes only.</p>
                  <p className="mt-4 font-medium">Nothing contained herein constitutes:</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside marker:text-gold">
                    <li>An offer to sell or solicitation to invest</li>
                    <li>Investment, legal, tax, or financial advice</li>
                    <li>A recommendation or endorsement of any strategy or instrument</li>
                  </ul>
                  <p className="mt-4">Any investment decision must be made solely on the basis of formal offering documents and independent professional advice.</p>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4 text-red-800">Risk Disclosure</h3>
                  <p>Investing involves risk, including the potential loss of capital.</p>
                  <p className="mt-4 italic">Past performance, simulated results, or projected returns are not indicative of future performance. Quantitative strategies may be subject to model risk, market regime shifts, liquidity constraints, and unforeseen events.</p>
                  <p className="mt-4 font-bold">No assurance can be given that any investment objective will be achieved.</p>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Accuracy of Information</h3>
                  <p>While QuantRidge believes the information presented is accurate at the time of publication:</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside marker:text-gold">
                    <li>No representation or warranty is made regarding its completeness or accuracy</li>
                    <li>Information may be updated, modified, or withdrawn without notice</li>
                    <li>Third-party data may not have been independently verified</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4 font-bold text-red-900 border-b border-red-100 pb-2">Limitation of Liability</h3>
                  <p>To the fullest extent permitted by law, QuantRidge and its affiliates, directors, officers, and employees shall not be liable for any direct or indirect losses, consequential or incidental damages, or loss of profits, data, or opportunity arising from or in connection with access to or use of this website.</p>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4 uppercase">Intellectual Property</h3>
                  <p>All content on this website is proprietary to QuantRidge and may not be copied, reproduced, distributed, or used without prior written consent.</p>
                </section>

                <section>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Regulatory Status</h3>
                  <p>QuantRidge may operate under applicable regulatory frameworks depending on jurisdiction.</p>
                  <p className="mt-4 bg-navy/5 p-4 rounded text-xs leading-relaxed">NOTHING ON THIS WEBSITE HAS BEEN REVIEWED OR APPROVED BY THE MONETARY AUTHORITY OF SINGAPORE (MAS) OR ANY OTHER REGULATORY AUTHORITY.</p>
                </section>

                <div className="bg-gold/10 p-8 rounded-xl border border-gold/20">
                  <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-4">Final Confirmation</h3>
                  <p className="font-medium text-navy">By selecting “I AGREE”, you confirm that:</p>
                  <ul className="mt-4 space-y-2 list-inside list-disc">
                    <li>You meet the relevant investor classification criteria</li>
                    <li>You understand and accept the risks involved</li>
                    <li>You agree to all terms stated above</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-gray-50 px-6 py-8 sm:px-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
               <button 
                onClick={handleReject}
                className="order-2 sm:order-1 flex items-center gap-2 text-navy/40 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-red-600 transition-colors duration-300"
              >
                <XCircle size={16} /> Reject & Exit
              </button>
              <button 
                onClick={handleAgree}
                className="order-1 sm:order-2 w-full sm:w-auto bg-navy text-gold px-12 py-5 rounded-md text-[10px] uppercase font-bold tracking-[0.4em] shadow-lg shadow-navy/10 hover:bg-gold hover:text-navy hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-4"
              >
                <CheckCircle2 size={16} /> I Agree
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
