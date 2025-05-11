
const WhatYouLearnSection = () => {
  const learningModules = [
    "Social Media Marketing",
    "Facebook & Google Ads",
    "Search Engine Optimisation",
    "Website Development",
    "Content & Copywriting",
    "Affiliate Marketing"
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Master Skills That Pay</h2>
        <p className="section-subtitle">Practical, proven skills that can generate income within weeks</p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
          {learningModules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white text-primary font-semibold px-6 py-4 rounded-full border border-primary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              {module}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
