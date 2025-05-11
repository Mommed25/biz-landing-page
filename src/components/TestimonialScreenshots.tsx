
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TestimonialScreenshots = () => {
  const testimonials = [
    {
      name: "Archana Bhattarai",
      role: "College Student",
      image: "/lovable-uploads/b70a5756-c8ee-47b5-938e-75f2d8b52da2.png",
      quote: "Myself Archana, I am a college student and today I made my first income. They say hardwork and consistency pays off and here I am with my results."
    },
    {
      name: "Ishita Paul",
      role: "Student from West Bengal",
      image: "/lovable-uploads/ef298685-9f26-4143-8acd-6d275605e594.png",
      quote: "I joined bizgurukul when I was 19 years old. At the age of 21 I bought my first flat in Kolkata."
    },
    {
      name: "Farhanaaz Qureshi",
      role: "Homemaker turned Entrepreneur",
      image: "/lovable-uploads/3816bfa1-c4ed-4397-8909-77ffc36ecd0e.png",
      quote: "Finally I did it! From a homemaker to a business associate, I can do it all. It may take time but slowly and surely we can achieve success. Thank you bizGurukul for providing a great platform."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Students Earning Proofs From Our Affiliate Programme</h2>
        <p className="section-subtitle">Real results from our students</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-5 md:mb-6 h-48 md:h-56">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s Success Screenshot`}
                  className="w-full h-full rounded-lg object-cover shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialScreenshots;
