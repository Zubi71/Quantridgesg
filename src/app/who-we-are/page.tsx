'use client';
import WhoWeAreHero from '@/components/sections/WhoWeAreHero';
import WhoWeAreVision from '@/components/sections/WhoWeAreVision';
import MarqueeLeadership from '@/components/sections/MarqueeLeadership';
import GlobalPresence from '@/components/sections/GlobalPresence';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function WhoWeArePage() {
  return (
    <main className="bg-white">
      <WhoWeAreHero />
      <div id="vision">
        <WhoWeAreVision />
      </div>
      <div id="leadership">
        <MarqueeLeadership />
      </div>
      <div id="global">
        <GlobalPresence />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
