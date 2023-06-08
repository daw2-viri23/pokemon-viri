import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nkalpkjnpunyoszzefhp.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYWxwa2pucHVueW9zenplZmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzk4ODYsImV4cCI6MTk5Mjc1NTg4Nn0.XX0aLqybyM7h7thGiuJ7JEXHuJyQDui0pLOJsBgy_dg'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)