// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
import type { DatabaseItem } from '../types.ts';

// Vite requires 'import.meta.env' for environment variables.
// Adding 'as string' ensures TypeScript doesn't complain about them being undefined.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches all public rows from your specified table.
 * Returns an array of your typed DatabaseItems.
 */
export const fetchPublicData = async (): Promise<DatabaseItem[]> => {
  // We type the table target so 'data' inherits the DatabaseItem[] shape
  const { data, error } = await supabase
    .from('your_table_name') // Replace with your actual table name
    .select('*');

  if (error) {
    console.error("Error loading data:", error.message);
    return [];
  }

  // TypeScript now guarantees 'data' matches your expected database structure
  return data as DatabaseItem[];
};