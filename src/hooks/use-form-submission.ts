
import { useState } from 'react';
import { saveFormSubmission } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

// Admin WhatsApp number (change this to your admin's number)
const ADMIN_WHATSAPP = '9XXXXXXXXXX'; // Replace with your actual admin number

// Function to create WhatsApp message URL
const createWhatsAppUrl = (name: string, phone: string) => {
  const message = encodeURIComponent(
    `New registration from website!\n\nName: ${name}\nPhone: ${phone}\n\nPlease follow up with this lead.`
  );
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
};

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (name: string, phone: string) => {
    setIsSubmitting(true);
    
    try {
      // Save data to Supabase
      const result = await saveFormSubmission(name, phone);
      
      if (!result.success) {
        throw new Error('Failed to save form data');
      }
      
      // Create WhatsApp notification URL for admin
      const whatsappUrl = createWhatsAppUrl(name, phone);
      
      // Open WhatsApp notification in a new tab
      window.open(whatsappUrl, '_blank');
      
      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};
