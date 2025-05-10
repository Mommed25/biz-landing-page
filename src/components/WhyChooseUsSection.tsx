
import { MessageCircle, Book, Gift } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Book,
      title: '50+ Hours of Lessons',
      description: 'Comprehensive video courses covering every aspect of online income generation'
    },
    {
      icon: MessageCircle,
      title: 'Top Mentors & Trainers',
      description: 'Learn from industry experts who are actively earning through these methods'
    },
    {
      icon: Gift,
      title: 'Real Income Case Studies',
      description: 'See real examples of students who went from zero to consistent monthly income'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">We focus on practical skills and proven methods that work in the real world</p>
        
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
