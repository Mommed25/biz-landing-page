
import { Button } from '@/components/ui/button';
import { ArrowRight, Timer } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="flex items-center gap-2 mb-4">
              <Timer className="h-5 w-5 text-primary animate-pulse" />
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                Only 4 slots remaining at 30% discount!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Master <span className="text-primary">Digital Marketing</span> & Earn Passive Income
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join 2.5 Lakh+ students across India who are earning thousands and lakhs monthly through our affiliate marketing program and freelancing opportunities.
            </p>
            
            <div className="mb-6 bg-gray-100 p-4 rounded-lg">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-gray-500 line-through">₹15,999</span>
                <span className="text-2xl md:text-3xl font-bold text-primary">₹10,999</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  Save ₹5,000
                </span>
              </div>
              <p className="text-sm text-gray-600">Lifetime access • One-time payment • Limited time offer</p>
            </div>
            
            <Button className="btn-primary text-lg py-6 px-10 flex items-center gap-2 rounded-full animate-pulse-light">
              <span>Secure Your Slot Now</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Student" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10 animate-float"
              />
              
              {/* Testimonial badge */}
              <div className="absolute -bottom-6 -right-6 bg-white px-4 py-3 rounded-lg shadow-lg z-20 max-w-[250px]">
                <p className="text-sm font-medium">"I started earning ₹50K/month after just 3 months!"</p>
                <p className="text-xs text-gray-500 mt-1">- Arun, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
