import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://oltwgfugfitrfhwdiztl.supabase.co/rest/v1/facts";
const supabaseUrl = "https://oltwgfugfitrfhwdiztl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sdHdnZnVnZml0cmZod2RpenRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3NzkxMjEsImV4cCI6MTk5NjM1NTEyMX0.3-WvAse6GUb9ItwDJD9x5sB7yGSnLuw-eRjGbLt5AwY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
