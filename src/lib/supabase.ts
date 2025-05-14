
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials are missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Form submissions helper functions
export const saveFormSubmission = async (name: string, phone: string) => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([{ name, phone, created_at: new Date().toISOString() }]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error saving form submission:', error);
    return { success: false, error };
  }
};
