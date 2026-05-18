'use client';
import WhatWeDoHero from '@/components/sections/WhatWeDoHero';
import InvestmentApproach from '@/components/sections/InvestmentApproach';
import ResearchEcosystem from '@/components/sections/ResearchEcosystem';
import TechEdge from '@/components/sections/TechEdge';
import ScientificCulture from '@/components/sections/ScientificCulture';
import GlobalPresence from '@/components/sections/GlobalPresence';
import Markets from '@/components/sections/Markets';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function WhatWeDoPage() {
  return (
    <main className="bg-white min-h-screen">
      <WhatWeDoHero />
      <InvestmentApproach />
      <ScientificCulture />
      <ResearchEcosystem />
      <TechEdge />
      <GlobalPresence />
      <Markets />
      <div className="bg-navy">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
