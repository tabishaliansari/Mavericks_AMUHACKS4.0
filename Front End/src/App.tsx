import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DemoSection } from './components/DemoSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <TechnologiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>;
}