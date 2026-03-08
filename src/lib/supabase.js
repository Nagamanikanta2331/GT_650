import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mawkqdsijfbrujyzgdjw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hd2txZHNpamZicnVqeXpnZGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjMxNzMsImV4cCI6MjA4ODUzOTE3M30.qCg5pihzPpLxRyBclneEHIOXr6TMWwstJUPpjlqAoAw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
