
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const features = [
    "50+ hours of video lessons",
    "Weekly live Q&A sessions",
    "Private community access",
    "All bonuses included",
    "6 months support",
    "Certificate of completion",
    "30-day money-back guarantee"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-custom">
        <h2 className="section-title">Limited Time Offer</h2>
        <p className="section-subtitle">Start your journey to financial freedom today</p>
        
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Complete Program</h3>
              <div className="flex items-center justify-center">
                <span className="text-lg line-through opacity-70">₹24,999</span>
                <span className="text-4xl font-bold ml-4">₹9,999</span>
              </div>
              <p className="text-primary-foreground/80 mt-2">One-time payment, lifetime access</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="btn-primary w-full py-6 text-lg">
                Enroll Now
              </Button>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Secure payment via Razorpay</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="RuPay" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/upi.png" alt="UPI" className="h-6" />
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
