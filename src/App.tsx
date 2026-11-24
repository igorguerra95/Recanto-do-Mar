import React, { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutAndProofSection } from './components/AboutAndProofSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const scrollToContact = useCallback(() => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('booking-name');
      if (nameInput instanceof HTMLInputElement) {
        window.setTimeout(() => {
          nameInput.focus({ preventScroll: true });
        }, 450);
      }
    }
  }, []);

  const handleSelectSpecialty = useCallback(
    (specialtyTitle: string) => {
      setSelectedSpecialty(specialtyTitle);
      scrollToContact();
    },
    [scrollToContact]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-ocean/20">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Ir para o conteúdo principal
        </a>

        <Navbar onContactClick={scrollToContact} />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection onContactClick={scrollToContact} />
          <SpecialtiesSection onSelectSpecialty={handleSelectSpecialty} />
          <AboutAndProofSection onContactClick={scrollToContact} />
          <ContactSection selectedSpecialty={selectedSpecialty} />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
