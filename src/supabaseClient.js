import { SupabaseClient, createClient } from '@supabase/supabase-js'

// Creating a single supabase client for interacting with my database
export const supabase = createClient(
  import.meta.env.VITE_TALKBOX_APP_SUPABASE_URL,
  import.meta.env.VITE_TALKBOX_APP_SUPABASE_ANON_KEY
  )