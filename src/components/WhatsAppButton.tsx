
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll events to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down more than 50px, hide the button
      if (currentScrollY > lastScrollY + 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // If scrolling up, show the button
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Pulse effect
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Create periodic pulse effect
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <a
      href="https://wa.me/919656517580?text=I'm%20interested%20in%20the%20Digital%20Marketing%20course%20with%20affiliate%20program.%20Please%20reserve%20my%20early%20bird%20slot!"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {(isHovered || isPulsing) && (
          <div className="mr-3 bg-red-50 text-gray-800 py-2 px-4 rounded-l-full shadow-lg animate-fade-in border border-red-200">
            <span className="font-medium text-red-600">⚠️ Only 4 slots left at 30% off!</span>
          </div>
        )}
        <div 
          className={`${isPulsing ? 'scale-110' : ''} transition-all duration-300`}
          style={{ width: '60px', height: '60px' }}
        >
          <img 
            src="/lovable-uploads/21a05e39-3804-4ed5-8a2c-ec45df9a7f4d.png" 
            alt="WhatsApp" 
            className="w-full h-full"
          />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
