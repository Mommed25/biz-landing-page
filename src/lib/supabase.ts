
import { createClient } from '@supabase/supabase-js';

// Use the values from your Supabase project
const supabaseUrl = "https://xckwugeyjjeppvapfvnr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhja3d1Z2V5amplcHB2YXBmdm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzAyODcsImV4cCI6MjA2MjgwNjI4N30.XIfc8hQGr8iVYA5cxvdlUASyST7nfQSFpe2-8vKHKWA";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials are missing. Please check your configuration.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Form submissions helper functions
export const saveFormSubmission = async (name: string, phone: string) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, phone }]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error saving form submission:', error);
    return { success: false, error };
  }
};
