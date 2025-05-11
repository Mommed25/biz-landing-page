
import React, { useEffect, useRef } from 'react';

const StudentsWorkSection = () => {
  const logos = [
    { name: 'Zomato', logo: '/lovable-uploads/f2e8e01a-a12b-4d97-b455-7ac7041fbe89.png' },
    { name: 'Vivo', logo: '/lovable-uploads/019608e1-4412-4996-8fd5-58eeba592fd6.png' },
    { name: 'Wipro', logo: '/lovable-uploads/c8d1690f-c379-4673-914f-38afb60bcaa0.png' },
    { name: 'Deloitte', logo: '/lovable-uploads/0bc94515-248f-4a2f-ac02-cd69a3b9fcd2.png' },
    { name: 'TCS', logo: '/lovable-uploads/e492e7dc-cc48-45c9-87e7-00cd62ec90c8.png' },
    { name: 'Accenture', logo: '/lovable-uploads/76b10ef5-abcd-4225-8883-64f518600641.png' },
    { name: 'Flydocs', logo: '/lovable-uploads/2c425840-fb46-4990-81b3-093dba0da7f5.png' },
    { name: 'Genpact', logo: '/lovable-uploads/5d405c40-4d1c-4e5a-b256-85d21334f833.png' },
    { name: 'Sonata', logo: '/lovable-uploads/9c34074d-9705-437b-9a51-b587195f9314.png' },
  ];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const animateScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    
    const animationId = setInterval(animateScroll, 30);
    
    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Where Our Students Work</h2>
        <p className="section-subtitle">Our graduates are employed at top companies worldwide</p>
        
        <div className="relative overflow-hidden mt-10">
          <div 
            ref={scrollRef}
            className="flex space-x-12 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* First set of logos */}
            {logos.map((company, index) => (
              <div key={`a-${index}`} className="flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`}
                  className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate for continuous scrolling */}
            {logos.map((company, index) => (
              <div key={`b-${index}`} className="flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`}
                  className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsWorkSection;
