
import React, { useRef, useEffect } from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: '3 Lakh+',
      label: 'Students',
      animationValue: 3
    },
    {
      value: '₹80 Cr+',
      label: 'Community Earnings',
      animationValue: 80
    },
    {
      value: '24+',
      label: 'Courses',
      animationValue: 24
    },
    {
      value: '171+',
      label: 'Hours',
      animationValue: 171
    },
    {
      value: '200+',
      label: 'Trainers',
      animationValue: 200
    },
    {
      value: '5+',
      label: 'Years',
      animationValue: 5
    }
  ];
  
  // References to hold each stats element
  const statsRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    // Observer for animation when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(entry.target as HTMLHeadingElement);
          // Unobserve after triggering animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all stats elements
    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to animate the counter
  const animateValue = (element: HTMLHeadingElement) => {
    const index = parseInt(element.dataset.index || '0', 10);
    const target = stats[index].animationValue;
    const prefix = index === 1 ? '₹' : '';  // Add Rupee symbol for Community Earnings
    const suffix = '+';
    let unit = '';
    
    if (index === 0) unit = ' Lakh';
    if (index === 1) unit = ' Cr';
    
    const duration = 2000; // Animation duration in milliseconds
    let start = 0;
    const startTime = new Date().getTime();
    
    const updateCounter = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        // Easing function for smooth animation
        const progress = elapsedTime / duration;
        const easedProgress = -Math.cos(progress * Math.PI) / 2 + 0.5;
        const currentValue = Math.floor(easedProgress * target);
        
        element.textContent = `${prefix}${currentValue}${unit}${suffix}`;
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure we end exactly at the target value
        element.textContent = `${prefix}${target}${unit}${suffix}`;
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

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
              <h3 
                ref={(el) => (statsRefs.current[index] = el)} 
                data-index={index}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2"
              >
                0
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
