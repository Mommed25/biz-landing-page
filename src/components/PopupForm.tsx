
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormSubmission } from '@/hooks/use-form-submission';
import { toast } from '@/hooks/use-toast';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const { submitForm, isSubmitting } = useFormSubmission();
  
  useEffect(() => {
    // Show popup after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const result = await submitForm(name, phone);
      
      if (result.success) {
        // Move to success step
        setStep(2);
        
        // Log success message
        console.log(`Form submitted - Name: ${name}, Phone: ${phone}`);
        
        // Close the popup after showing success message
        setTimeout(() => {
          setIsOpen(false);
          // Reset form after closing
          setTimeout(() => {
            setStep(1);
            setName('');
            setPhone('');
          }, 500);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative overflow-hidden">
        {/* Header - Center aligned text */}
        <div className="bg-primary p-5 text-white text-center">
          <h3 className="text-xl font-bold">
            {step === 2 ? 'Thank You!' : 'Start Your Journey To Financial Freedom'}
          </h3>
        </div>
        
        <div className="p-5">
          {step === 1 && (
            <>
              <p className="mb-3 text-gray-600">
                Do you wish to earn passive income while learning Digital Marketing skills?
              </p>
              <p className="mb-6 text-gray-600 font-medium">
                If Yes, Please fill in the form given below
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Get Started'}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  We'll send you more information about earning opportunities
                </p>
              </form>
            </>
          )}
          
          {step === 2 && (
            <div className="py-8 text-center">
              <div className="mb-4 text-green-500 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Thank You for Your Interest!</h4>
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
