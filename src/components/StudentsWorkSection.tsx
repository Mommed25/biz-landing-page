
import React, { useEffect, useRef } from 'react';

const StudentsWorkSection = () => {
  const logos = [
    { name: 'Zomato', logo: '/logos/zomato.png' },
    { name: 'Vivo', logo: '/logos/vivo.png' },
    { name: 'Wipro', logo: '/logos/wipro.png' },
    { name: 'Deloitte', logo: '/logos/deloitte.png' },
    { name: 'TCS', logo: '/logos/tcs.png' },
    { name: 'Accenture', logo: '/logos/accenture.png' },
    { name: 'Flydocs', logo: '/logos/flydocs.png' },
    { name: 'Genpact', logo: '/logos/genpact.png' },
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
