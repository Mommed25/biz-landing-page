
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
import LimitedTimeCta from '@/components/LimitedTimeCta';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="container-custom py-8 md:py-12">
        <LimitedTimeCta />
      </div>
      
      <WhoIsThisForSection />
      
      <div className="container-custom py-8 md:py-10">
        <LimitedTimeCta variant="compact" />
      </div>
      
      <WhatYouLearnSection />
      
      <div className="bg-gray-50 py-8 md:py-10">
        <div className="container-custom">
          <LimitedTimeCta variant="compact" />
        </div>
      </div>
      
      <WhyChooseUsSection />
      <TestimonialsSection />
      
      <div className="container-custom py-8 md:py-10">
        <LimitedTimeCta />
      </div>
      
      <BonusesSection />
      <PricingSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
