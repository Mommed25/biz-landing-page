
import { CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PricingSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    "50+ hours of digital marketing video lessons",
    "Complete affiliate marketing training program",
    "Freelancing opportunities with upskilling courses",
    "Weekly live Q&A sessions",
    "Private community access with 3 Lakh+ students",
    "Real success stories of students earning thousands to lakhs monthly",
    "Lifetime access with one-time payment",
    "All bonuses included worth ₹15,000"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="relative inline-block mb-2 mx-auto">
          <span className="absolute inset-0 bg-primary/20 rounded-full transform rotate-3"></span>
          <span className="relative bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">EARLY BIRD OFFER</span>
        </div>
        <h2 className="section-title">Limited Time Offer - Only 4 Slots Left!</h2>
        <p className="section-subtitle">Join 3 Lakh+ students already on their path to financial freedom</p>
        
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary text-white p-8 text-center relative overflow-hidden">
              {/* Price tag ribbon */}
              <div className="absolute -right-12 top-8 bg-yellow-400 text-primary font-bold py-1 px-10 transform rotate-45 shadow-lg">
                30% OFF
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Complete Digital Marketing Program</h3>
              <div className="flex items-center justify-center">
                <span className="text-lg line-through opacity-70">₹15,999</span>
                <span className="text-4xl font-bold ml-4">₹10,999</span>
              </div>
              <p className="text-primary-foreground/80 mt-2">One-time payment, lifetime access</p>
            </div>
            
            <div className="p-8">
              <div className="p-4 bg-yellow-50 rounded-lg mb-6 border border-yellow-200">
                <p className="text-center text-amber-800 font-medium">
                  📱 Send your payment screenshot to our WhatsApp number to get exclusive community access!
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://www.bizgurukul.com/Signup.aspx?id=aBdsUosgN7I=&ref=mxYutvlG9zAWrPOUDsSrsg==&user_id=Jyp7dKMsJlc=&lid=tA0Vq/eD3UTFBKz6B1tcPorQzsL4eJrH"
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  className={`w-full py-6 text-lg transition-all duration-300 ${isHovered ? 'scale-[1.02] shadow-lg' : ''} flex items-center justify-center gap-2`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Secure Your Slot Now</span>
                  <Zap className={`h-5 w-5 transition-all ${isHovered ? 'scale-125' : ''}`} />
                </Button>
              </a>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Send your payment screenshot to our WhatsApp number</p>
                <p className="mt-2 text-xs">for access to our exclusive community group</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="RuPay" className="h-6" />
                  <img src="https://img.icons8.com/ios-filled/50/000000/bhim-upi.png" alt="UPI" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
