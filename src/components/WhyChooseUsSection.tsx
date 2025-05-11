
import { Award, Clock, Users, HandHeart } from 'lucide-react';

interface WhyChooseUsSectionProps {
  id?: string;
}

const WhyChooseUsSection = ({ id }: WhyChooseUsSectionProps) => {
  const benefits = [
    {
      icon: Award,
      title: 'Government of India Registered & Approved',
      description: 'Official recognition ensuring quality education and credibility'
    },
    {
      icon: Clock,
      title: 'Lifetime Validity',
      description: 'One-time payment for unlimited access to our comprehensive digital marketing courses forever'
    },
    {
      icon: Award,
      title: 'Industry Recognised Certificate',
      description: 'Receive a professional certificate that adds value to your resume and credibility to your skills'
    },
    {
      icon: HandHeart,
      title: 'Learn & Earn Opportunity',
      description: 'Opportunity to earn passive income while you learn with complete training'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">We focus on practical skills that generate real income through digital marketing</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 md:p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary mb-4 md:mb-6">
                <benefit.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
