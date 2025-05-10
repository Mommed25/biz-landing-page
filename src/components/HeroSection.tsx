
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Your Path to <span className="text-primary">Passive Income</span> Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how students, professionals & homemakers earn from home with our proven methods and expert guidance.
            </p>
            <Button className="btn-primary text-lg py-6 px-10 animate-pulse-light">
              Join the Program Now
            </Button>
          </div>
          
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Confident learner on laptop" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
