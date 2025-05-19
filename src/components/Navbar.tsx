
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-6 md:px-10 bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="block">
            <img src="/lovable-uploads/64753bd4-2845-472a-94a1-919c350fa2b3.png" alt="Bizgurukul Logo" className="h-8 md:h-10" />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
          <Button className="bg-primary hover:bg-primary-dark text-white rounded-full" asChild>
            <a href="https://www.bizgurukul.com/Signup.aspx?id=aBdsUosgN7I=&ref=mxYutvlG9zAWrPOUDsSrsg==&user_id=Jyp7dKMsJlc=&lid=tA0Vq/eD3UTFBKz6B1tcPorQzsL4eJrH">
              Join Now
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-4 px-6 bg-white border-t mt-4 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors py-2">About</a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors py-2">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors py-2">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors py-2">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors py-2">FAQ</a>
            <Button className="bg-primary hover:bg-primary-dark text-white w-full rounded-full" asChild>
              <a href="https://www.bizgurukul.com/Signup.aspx?id=aBdsUosgN7I=&ref=mxYutvlG9zAWrPOUDsSrsg==&user_id=Jyp7dKMsJlc=&lid=tA0Vq/eD3UTFBKz6B1tcPorQzsL4eJrH">
                Join Now
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
