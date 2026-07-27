import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { GwpProcessVisualizer } from './components/GwpProcessVisualizer';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CareerHighlights } from './components/CareerHighlights';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleOpenContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar
        onOpenCVModal={() => setCvModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        <Hero
          onOpenCVModal={() => setCvModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        <AboutSection />

        <ExperienceTimeline />

        <GwpProcessVisualizer />

        <SkillsMatrix />

        <CareerHighlights />

        <EducationSection />

        <ContactSection />
      </main>

      <Footer />

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
