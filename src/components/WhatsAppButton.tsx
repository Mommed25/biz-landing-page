
import { Phone } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href="https://wa.me/919876543210?text=I'm%20interested%20in%20learning%20more%20about%20the%20Income%20Masters%20program"
      className="fixed bottom-6 right-6 z-50"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {isHovered && (
          <div className="mr-3 bg-white text-gray-800 py-2 px-4 rounded-l-full shadow-lg animate-fade-in">
            <span className="font-medium">Talk to a Mentor</span>
            <p className="text-xs">Malayalam support available</p>
          </div>
        )}
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <Phone className="h-6 w-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
