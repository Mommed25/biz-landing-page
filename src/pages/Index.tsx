
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
import FeaturedNewsSection from '@/components/FeaturedNewsSection';
import StudentsWorkSection from '@/components/StudentsWorkSection';
import StatsSection from '@/components/StatsSection';
import TestimonialScreenshots from '@/components/TestimonialScreenshots';
import VideoTestimonialsSection from '@/components/VideoTestimonialsSection';
import PopupForm from '@/components/PopupForm';
import EnrollmentNotification from '@/components/EnrollmentNotification';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="container-custom py-8">
        <LimitedTimeCta />
      </div>
      
      <FeaturedNewsSection />
      <StatsSection />
      <WhatYouLearnSection />
      <WhyChooseUsSection id="features" />
      <WhoIsThisForSection />
      
      <div className="container-custom py-8">
        <LimitedTimeCta variant="compact" />
      </div>
      
      <TestimonialsSection />
      <VideoTestimonialsSection id="testimonials" />
      <TestimonialScreenshots />
      <StudentsWorkSection />
      
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <LimitedTimeCta variant="compact" />
        </div>
      </div>
      
      <BonusesSection />
      
      {/* Extra CTA between Bonuses and FAQ */}
      <div className="container-custom py-8">
        <LimitedTimeCta variant="compact" />
      </div>
      
      <FaqSection />
      
      {/* Final CTA below FAQ section */}
      <div id="pricing" className="container-custom py-10 mb-8">
        <LimitedTimeCta />
      </div>
      
      <Footer />
      <WhatsAppButton />
      <PopupForm />
      <EnrollmentNotification />
    </div>
  );
};

export default Index;
