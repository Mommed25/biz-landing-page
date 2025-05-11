
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "The affiliate marketing module alone helped me generate ₹40,000 in my first month. Now I'm earning over a lakh monthly!",
    name: "Ramees Ali",
    location: "Kochi",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    quote: "I started earning ₹15,000/month as a student! This digital marketing course gave me financial independence while still in college.",
    name: "Arjun Menon",
    location: "Kochi",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    quote: "As a homemaker, I now make ₹25,000 monthly working just 2 hours daily with the affiliate marketing skills I learned here.",
    name: "Fathima Shahana",
    location: "Trivandrum",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg"
  },
  {
    quote: "After 5 years in IT, I was burnt out. This program helped me build a side hustle that now earns more than my corporate job!",
    name: "Priya Nair",
    location: "Kozhikode",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoSlide, currentIndex]);

  // Pause auto-slide when user interacts
  const handleManualNavigation = (callback: () => void) => {
    setAutoSlide(false);
    callback();
    
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => setAutoSlide(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">Join thousands of students already earning through our program</p>
        
        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].location}</p>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex justify-center md:justify-end space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleManualNavigation(prevTestimonial)}
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleManualNavigation(nextTestimonial)}
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
