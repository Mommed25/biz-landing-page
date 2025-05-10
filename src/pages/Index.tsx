
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhoIsThisForSection from '@/components/WhoIsThisForSection';
import WhatYouLearnSection from '@/components/WhatYouLearnSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonusesSection from '@/components/BonusesSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhoIsThisForSection />
      <WhatYouLearnSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BonusesSection />
      <PricingSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
