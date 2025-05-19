
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (name: string, phone: string) => {
    setIsSubmitting(true);
    
    try {
      // Save lead data to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([{ name, phone }]);
      
      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Database Error",
          description: "Could not save your information. Please try again.",
          variant: "destructive",
        });
        
        setIsSubmitting(false);
        return { success: false, error };
      } 
      
      console.log('Form submitted - Name:', name, 'Phone:', phone);
      console.info('Lead successfully saved to Supabase');
      
      // Show success toast
      toast({
        title: "Thank you!",
        description: "Your information has been received. We'll contact you soon.",
        variant: "default",
      });
      
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
