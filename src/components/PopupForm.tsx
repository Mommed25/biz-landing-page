
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1); // 1: Form, 2: OTP, 3: Success
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  useEffect(() => {
    // Show popup after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const generateOtp = () => {
    // Generate a 4-digit OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    return newOtp;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    
    // Generate OTP and move to OTP verification step
    const newOtp = generateOtp();
    console.log(`OTP Generated: ${newOtp}`); // For demo purposes
    setStep(2);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo verification (in real app, this would check against a server)
    if (otp === generatedOtp) {
      setStep(3);
      // In a real app, you would submit data to server here
      setTimeout(() => {
        setIsOpen(false);
        // Reset form after closing
        setTimeout(() => {
          setStep(1);
          setName('');
          setPhone('');
          setOtp('');
        }, 500);
      }, 3000);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Header */}
        <div className="bg-primary p-5 text-white">
          <h3 className="text-xl font-bold">
            {step === 3 ? 'Thank You!' : 'Start Your Journey To Financial Freedom'}
          </h3>
        </div>
        
        <div className="p-5">
          {step === 1 && (
            <>
              <p className="mb-6 text-gray-600">
                Do you wish to earn passive income while learning Digital Marketing skills?
              </p>
              
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">WhatsApp Number</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your 10-digit number"
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Get Started
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  We'll send you more information about earning opportunities
                </p>
              </form>
            </>
          )}
          
          {step === 2 && (
            <>
              <p className="mb-4 text-gray-600">
                Please enter the OTP sent to your WhatsApp number
              </p>
              
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input 
                    id="otp"
                    type="text" 
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 4-digit OTP"
                    required
                    pattern="[0-9]{4}"
                    maxLength={4}
                    className="text-center text-lg tracking-wider"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Verify OTP
                </Button>
                
                <div className="flex justify-between text-xs">
                  <button 
                    type="button" 
                    onClick={() => {
                      const newOtp = generateOtp();
                      console.log(`New OTP Generated: ${newOtp}`); // For demo purposes
                    }} 
                    className="text-primary hover:underline"
                  >
                    Resend OTP
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="text-gray-500 hover:underline"
                  >
                    Change Number
                  </button>
                </div>
              </form>
              
              {/* Demo OTP display - remove this in production */}
              <p className="mt-4 text-xs text-center bg-yellow-50 p-2 rounded">
                For demo purposes, your OTP is: <strong>{generatedOtp}</strong>
              </p>
            </>
          )}
          
          {step === 3 && (
            <div className="py-8 text-center">
              <div className="mb-4 text-green-500 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Mobile Number Verified</h4>
              <p className="text-gray-600">
                You can now access the website and get yourself enrolled to our course to attain financial freedom.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
