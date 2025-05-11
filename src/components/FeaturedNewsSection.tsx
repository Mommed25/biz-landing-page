
import React from 'react';

const FeaturedNewsSection = () => {
  const newsPortals = [
    { name: 'Dailyhunt', logo: '/logos/dailyhunt.png' },
    { name: 'Zee Business', logo: '/logos/zee-business.png' },
    { name: 'Entrepreneur India', logo: '/logos/entrepreneur-india.png' },
    { name: 'Times of India', logo: '/logos/times-of-india.png' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-8">Featured In</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {newsPortals.map((portal, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={portal.logo} 
                alt={`${portal.name} Logo`}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
