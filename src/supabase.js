import {ENV} from "./ENV"
import { createClient } from '@supabase/supabase-js'

export const supabase=createClient(ENV.supabaseProjectUrl,ENV.supabaseApiKey)