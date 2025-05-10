
import { MessageCircle, Book, Gift } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Book,
      title: 'Lifetime Access',
      description: 'One-time payment for unlimited access to 50+ hours of comprehensive digital marketing courses'
    },
    {
      icon: MessageCircle,
      title: 'Proven Results',
      description: '2.5 Lakh+ students across India with many earning thousands to lakhs monthly'
    },
    {
      icon: Gift,
      title: 'Complete Training',
      description: 'Full affiliate marketing program plus freelancing opportunities with upskilling courses'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">We focus on practical skills that generate real income through digital marketing</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
