
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Master <span className="text-primary">Digital Marketing</span> & Earn Passive Income
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn practical skills to generate consistent income through digital marketing and affiliate programs
          </p>
          <a 
            href="https://www.bizgurukul.com/Signup.aspx?id=aBdsUosgN7I=&ref=mxYutvlG9zAWrPOUDsSrsg==&user_id=Jyp7dKMsJlc=&lid=tA0Vq/eD3UTFBKz6B1tcPorQzsL4eJrH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="text-base px-8 py-6 h-auto rounded-full shadow-md"
            >
              Get Started Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
