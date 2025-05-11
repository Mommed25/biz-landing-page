
import React, { useState, useEffect, useRef } from 'react';
import { Book, Clock, Users, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const statsItems = [
    { icon: Book, value: 24, suffix: '', label: 'Courses' },
    { icon: Clock, value: 171, suffix: '+', label: 'Hours' },
    { icon: Users, value: 300000, suffix: '+', label: 'Students' },
    { icon: Award, value: 200, suffix: '+', label: 'Trainers' },
    { icon: TrendingUp, value: 80, suffix: ' Cr+', label: 'Community Earnings' },
  ];

  const [counters, setCounters] = useState(statsItems.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const formatNumber = (num: number) => {
    if (num >= 100000) {
      return (num / 100000).toFixed(1) + ' Lakh';
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    statsItems.forEach((item, index) => {
      let startValue = 0;
      const endValue = item.value;
      const duration = 2000; // 2 seconds for animation
      
      // Calculate increment based on size of number
      let increment;
      if (endValue < 100) {
        increment = 1;
      } else if (endValue < 1000) {
        increment = 5;
      } else if (endValue < 10000) {
        increment = 50;
      } else if (endValue < 100000) {
        increment = 500;
      } else {
        increment = 2000;
      }
      
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue > endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = startValue;
          return newCounters;
        });
        
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, Math.floor(duration / (endValue / increment)));
    });
  };

  return (
    <div ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Our Impact in Numbers</h2>
        <p className="section-subtitle">Growing stronger every day with our community</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {statsItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {formatNumber(counters[index])}{item.suffix}
              </div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
