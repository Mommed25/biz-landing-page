
import React from 'react';

const FeaturedNewsSection = () => {
  const newsPortals = [
    { name: 'Dailyhunt', logo: '/lovable-uploads/dc87d564-7005-432f-bfcd-d2a6c0b058d9.png' },
    { name: 'Zee Business', logo: '/lovable-uploads/cd2df0c0-7999-40d7-9bdd-b23fb2fd8aec.png' },
    { name: 'Entrepreneur India', logo: '/lovable-uploads/e03ea347-feb9-466f-9a55-8a652a3b3f9b.png' },
    { name: 'Times of India', logo: '/lovable-uploads/116ff6a6-78fa-4609-9848-5c3edcd3c845.png' },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-8">Featured In</h2>
        
        <div className="flex flex-row justify-center items-center gap-4 md:gap-12 lg:gap-16 flex-wrap sm:flex-nowrap">
          {newsPortals.map((portal, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
              <img 
                src={portal.logo} 
                alt={`${portal.name} Logo`}
                className="h-auto max-h-10 md:max-h-12 object-contain"
                style={{ maxWidth: '100px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
