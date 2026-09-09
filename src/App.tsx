import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { SavingsCalculator } from './components/SavingsCalculator';
import { IntegrationEcosystem } from './components/IntegrationEcosystem';
import { AiAgentSection } from './components/AiAgentSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToSimulasi = () => {
    const el = document.getElementById('simulasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#162A20] selection:bg-[#3EE69F] selection:text-[#004838]">
      {/* Brevo-styled Navigation */}
      <Navbar onOpenDemo={handleScrollToSimulasi} />

      <main>
        {/* Hero Section */}
        <Hero onExploreSimulasi={handleScrollToSimulasi} />

        {/* Core Checklist & Feature Grid */}
        <FeatureShowcase />

        {/* Hands-on Interactive Simulator */}
        <InteractiveSimulator />

        {/* Flat Rp 0 vs Per-Message Savings Calculator */}
        <SavingsCalculator />

        {/* Official Integrations (Biteship, TemanQRIS, AgxPOS) */}
        <IntegrationEcosystem />

        {/* AI Agent Deep Dive (Moderation & Direct Mode, Analytics) */}
        <AiAgentSection />

        {/* Transparent Comparison Table */}
        <ComparisonTable />

        {/* Merchant Social Proof */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* High-Impact Brevo-style CTA Banner */}
        <CtaBanner />
      </main>

      {/* Comprehensive Brevo-style Footer */}
      <Footer />
    </div>
  );
}
