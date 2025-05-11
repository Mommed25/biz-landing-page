
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: '3.0 Lakh+',
      label: 'Students'
    },
    {
      value: '80 Cr+',
      label: 'Community Earnings'
    },
    {
      value: '24+',
      label: 'Courses'
    },
    {
      value: '171+',
      label: 'Hours'
    },
    {
      value: '200+',
      label: 'Trainers'
    },
    {
      value: '8+',
      label: 'Expertised Mentors'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Impact In Numbers</h2>
        <p className="section-subtitle">Transforming lives across India</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-secondary/50 p-6 md:p-8 rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
