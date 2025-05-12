import { Users, Briefcase, PenTool, Home } from 'lucide-react';

const WhoIsThisForSection = () => {
  const items = [
    {
      icon: Users,
      title: 'Students',
      description: 'Looking to earn passive income while studying'
    },
    {
      icon: Briefcase,
      title: 'Working Professionals',
      description: 'Wanting to build additional income streams'
    },
    {
      icon: PenTool,
      title: 'Freelancers',
      description: 'Seeking to expand skills and client base'
    },
    {
      icon: Home,
      title: 'Homemakers',
      description: 'Aiming to earn from home with flexible hours'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Whom This Is For?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
