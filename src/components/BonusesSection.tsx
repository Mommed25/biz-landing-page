
import { 
  MessageCircle, 
  PenTool, 
  Users,
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BonusesSection = () => {
  const bonuses = [
    {
      icon: PenTool,
      title: 'Influencer Toolkit',
      description: 'Complete set of templates, scripts, and tools to accelerate your growth.',
      value: '₹6,000'
    },
    {
      icon: CheckCircle,
      title: 'Canva Templates',
      description: 'Premium Instagram and YouTube templates to create professional content.',
      value: '₹4,000'
    },
    {
      icon: MessageCircle,
      title: 'Strategy Call',
      description: 'Personal 30-minute call with one of our expert mentors.',
      value: '₹2,500'
    },
    {
      icon: Users,
      title: 'Private Community',
      description: 'Lifetime access to our exclusive community of earners.',
      value: '₹3,500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="relative inline-block mb-2">
          <span className="absolute inset-0 bg-primary/20 rounded-full transform rotate-3"></span>
          <span className="relative bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">EXCLUSIVE</span>
        </div>
        <h2 className="section-title">Free Bonuses Worth ₹15,000</h2>
        <p className="section-subtitle">Limited time bonuses included with your enrollment</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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
