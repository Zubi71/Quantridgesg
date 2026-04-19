'use client';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import MapSection from '@/components/sections/MapSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactForm />
      <MapSection />
      <Footer />
    </main>
  );
}
