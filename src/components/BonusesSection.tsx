
import { 
  MessageCircle, 
  PenTool, 
  Users,
  CheckCircle,
  HeartHandshake 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BonusesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const bonuses = [
    {
      icon: PenTool,
      title: 'Orientation to Earn Passive Income',
      description: 'Step-by-step guidance to start earning with zero investment.',
      value: '₹6,000'
    },
    {
      icon: Users,
      title: 'Access to Private Community',
      description: 'Join our exclusive network of successful students.',
      value: '₹3,500'
    },
    {
      icon: CheckCircle,
      title: 'Marketing Materials',
      description: 'Ready-to-use templates and promotional content.',
      value: '₹4,000'
    },
    {
      icon: HeartHandshake,
      title: 'Steps to Success Training Sessions',
      description: 'Learn proven strategies from top earners in the platform.',
      value: '₹5,500'
    },
    {
      icon: MessageCircle,
      title: 'Live Q&A Sessions',
      description: 'Get your questions answered by industry experts.',
      value: '₹2,500'
    }
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="flex justify-center mb-4">
          <motion.div
            className="relative inline-block"
            animate={isVisible ? { scale: [1, 1.1, 1], y: [0, -5, 0] } : {}}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            <span className="absolute inset-0 bg-primary/20 rounded-full transform rotate-3"></span>
            <span className="relative bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">EXCLUSIVE</span>
          </motion.div>
        </div>
        
        <motion.h2 
          className="section-title"
          animate={isVisible ? { 
            textShadow: ["0px 0px 0px rgba(255,121,46,0)", "0px 0px 10px rgba(255,121,46,0.5)", "0px 0px 0px rgba(255,121,46,0)"] 
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Free Bonuses Worth ₹15,000
        </motion.h2>
        
        <p className="section-subtitle">Included when you enroll during the early bird offer</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 flex justify-center">
                <bonus.icon className="h-10 w-10 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{bonus.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase text-gray-500">Value</span>
                  <span className="font-bold text-primary">{bonus.value}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
