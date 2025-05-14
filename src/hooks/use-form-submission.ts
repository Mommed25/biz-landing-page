
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

// Admin WhatsApp number
const ADMIN_WHATSAPP = '9656517580';

// Function to create WhatsApp message URL
const createWhatsAppUrl = (name: string, phone: string) => {
  const message = encodeURIComponent(`New Lead Alert!\nName: ${name}\nPhone: ${phone}\nPlease contact them soon.`);
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
};

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (name: string, phone: string) => {
    setIsSubmitting(true);
    
    try {
      // First, try to insert the data into Supabase
      let { error } = await supabase
        .from('leads')
        .insert([{ name, phone }]);
      
      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Database Error",
          description: "Could not save your information, but we'll still contact you.",
          variant: "destructive",
        });
      }
      
      // Even if database save fails, we can still notify admin via WhatsApp
      const whatsappUrl = createWhatsAppUrl(name, phone);
      
      // Open WhatsApp link in a new tab
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      
      return { success: false, error };
    }
  };

  return { submitForm, isSubmitting };
};
