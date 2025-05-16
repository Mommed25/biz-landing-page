
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  
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
      className={`fixed ${isMobile ? 'bottom-20' : 'bottom-6'} right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {(isHovered || isPulsing) && (
          <div className="mr-3 bg-red-50 text-gray-800 py-2 px-4 rounded-l-full shadow-lg animate-fade-in border border-red-200">
            <span className="font-medium text-red-600 whitespace-nowrap text-sm">⚠️ Only 4 slots left at 30% off!</span>
          </div>
        )}
        <div className={`${isPulsing ? 'scale-110' : ''} transition-all duration-300`}>
          <img 
            src="/lovable-uploads/e72b9ebd-f120-41f8-bd54-0902aa8eea5a.png" 
            alt="WhatsApp" 
            className="w-16 h-16 rounded-full drop-shadow-md"
          />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
