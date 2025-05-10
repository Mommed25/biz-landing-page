
import { Users, Briefcase, PenTool, Home } from 'lucide-react';

const WhoIsThisForSection = () => {
  const items = [
    {
      icon: Users,
      title: 'Students',
      description: 'Looking for extra income while studying'
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      description: 'Stuck in 9-5 jobs seeking more freedom'
    },
    {
      icon: PenTool,
      title: 'Freelancers',
      description: 'With unstable income wanting consistency'
    },
    {
      icon: Home,
      title: 'Homemakers',
      description: 'Dreaming of financial independence'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Is This You?</h2>
        <p className="section-subtitle">Our program is designed for motivated individuals from all walks of life</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
