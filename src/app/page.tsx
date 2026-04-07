'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import CorePrinciples from '@/components/sections/CorePrinciples';
import Markets from '@/components/sections/Markets';
import StrategyOverview from '@/components/sections/StrategyOverview';
import PerformancePhilosophy from '@/components/sections/PerformancePhilosophy';
import RiskManagement from '@/components/sections/RiskManagement';
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      const sections = gsap.utils.toArray(".diagonal-section") as HTMLElement[];
      const vh = window.innerHeight;

      const PAUSE_UNITS = 0.2;
      const sectionData = sections.map((section, i) => {
        const scrollHeight = section.scrollHeight;
        const overflow = Math.max(0, scrollHeight - vh);
        const arrivalUnits = i === 0 ? 0 : 1;
        const internalUnits = overflow / vh;
        // Every section that exists gets a pause unit at the end, except maybe the last one
        const pauseUnits = i < sections.length - 1 ? PAUSE_UNITS : 0;
        return { section, arrivalUnits, internalUnits, pauseUnits, overflow };
      });

      const totalUnits = sectionData.reduce((sum, d) => sum + d.arrivalUnits + d.internalUnits + d.pauseUnits, 0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: () => `+=${totalUnits * vh}`,
          invalidateOnRefresh: true,
        },
      });

      let cursor = 0;
      sectionData.forEach(({ section, arrivalUnits, internalUnits, pauseUnits, overflow }, i) => {
        gsap.set(section, { zIndex: i + 1, opacity: i === 0 ? 1 : 0 });
        const isFooter = section.classList.contains("footer-section");
        if (i > 0) {
          tl.fromTo(
            section,
            { xPercent: isFooter ? 0 : -100, yPercent: 100, opacity: 1, scale: 0.95 },
            { xPercent: 0, yPercent: 0, opacity: 1, scale: 1, ease: "none", duration: arrivalUnits },
            cursor
          );
          cursor += arrivalUnits;
        }
        if (overflow > 0) {
          tl.to(section, { y: -overflow, ease: "none", duration: internalUnits }, cursor);
          cursor += internalUnits;
        }
        
        // Add the "stuck" pause duration
        if (pauseUnits > 0) {
          cursor += pauseUnits;
        }
      });
      return;
    }

    // MOBILE Logic
    const allSections = gsap.utils.toArray(".diagonal-section") as HTMLElement[];
    const vh = window.innerHeight;
    const ROUND = "24px 24px 0 0";

    const riskSection = allSections[6];
    const whoSection = allSections[7];
    const ctaSection = allSections[8];
    if (riskSection && whoSection && ctaSection) {
      gsap.set(whoSection, { top: riskSection.scrollHeight });
      gsap.set(ctaSection, { top: riskSection.scrollHeight + whoSection.scrollHeight });
    }

    interface MobileSectionData {
      section: HTMLElement;
      partner?: HTMLElement; partners?: HTMLElement[];
      arrivalUnits: number;
      internalUnits: number;
      overflow: number;
      skip?: boolean;
    }

    const PAUSE_UNITS = 0.2;
    const sectionData: MobileSectionData[] = allSections.map((section, i) => {
      if (i === 0) {
        const overflow = Math.max(0, section.scrollHeight - vh);
        return { section, arrivalUnits: 0, internalUnits: overflow / vh, overflow };
      }
      if (i === 6) {
        const who = allSections[7];
        const cta = allSections[8];
        const combinedH = section.scrollHeight + who.scrollHeight + cta.scrollHeight;
        const combinedOverflow = Math.max(0, combinedH - vh);
        return { section, partners: [who, cta], arrivalUnits: 1, internalUnits: combinedOverflow / vh, overflow: combinedOverflow };
      }
      if (i === 7 || i === 8) return { section, arrivalUnits: 0, internalUnits: 0, overflow: 0, skip: true };
      const overflow = Math.max(0, section.scrollHeight - vh);
      return { section, arrivalUnits: 1, internalUnits: overflow / vh, overflow };
    });

    const totalUnits = sectionData.reduce((sum, d) => sum + d.arrivalUnits + d.internalUnits + (d.skip ? 0 : PAUSE_UNITS), 0);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => `+=${totalUnits * vh}`,
        invalidateOnRefresh: true,
      },
    });

    let cursor = 0;
    sectionData.forEach(({ section, partner, partners, arrivalUnits, internalUnits, overflow, skip }, i) => {
      if (skip) return;
      gsap.set(section, { zIndex: i + 1, opacity: i === 0 ? 1 : 0 });
      const isFooter = section.classList.contains("footer-section");
      if (i > 0 && arrivalUnits > 0) {
        const partnersList = partners ? partners : (partner ? [partner] : []);
        if (partnersList.length > 0) {
          partnersList.forEach((p, idx) => gsap.set(p, { zIndex: i + idx + 2, opacity: 0 }));
          tl.fromTo([section, ...partnersList], { y: vh, opacity: 1, borderRadius: ROUND }, { y: 0, opacity: 1, borderRadius: ROUND, ease: "none", duration: arrivalUnits }, cursor);
        } else {
          tl.fromTo(section, { y: vh, opacity: 1, borderRadius: ROUND }, { y: 0, opacity: 1, borderRadius: isFooter ? "0px" : ROUND, ease: "none", duration: arrivalUnits }, cursor);
        }
        cursor += arrivalUnits;
      }
      if (overflow > 0) {
        const targets = partners ? [section, ...partners] : (partner ? [section, partner] : [section]);
        tl.to(targets, { y: -overflow, ease: "none", duration: internalUnits }, cursor);
        cursor += internalUnits;
      }

      // Add the "stuck" pause duration
      cursor += PAUSE_UNITS;
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="diagonal-container">
      <section className="diagonal-section bg-white"><Hero /></section>
      <section className="diagonal-section bg-white"><WhatWeDo /></section>
      <section className="diagonal-section bg-navy"><CorePrinciples /></section>
      <section className="diagonal-section bg-white"><Markets /></section>
      <section className="diagonal-section bg-white"><StrategyOverview /></section>
      <section className="diagonal-section bg-white"><PerformancePhilosophy /></section>
      <section className="diagonal-section bg-navy"><RiskManagement /></section>
      <section className="diagonal-section mobile-group-first max-sm:!min-h-fit bg-white"><WhoWeWorkWith /></section>
      <section className="diagonal-section mobile-group-second max-sm:!min-h-fit bg-navy"><CTA /></section>
      <section className="diagonal-section footer-section bg-navy"><Footer /></section>
    </main>
  );
}
