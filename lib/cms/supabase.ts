import { createClient } from "@supabase/supabase-js";
import { isSafeSupabaseBrowserKey } from "@/lib/cms/browser-key";

export function hasSupabaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      isSafeSupabaseBrowserKey(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY),
  );
}

export function createPublicSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !isSafeSupabaseBrowserKey(key)) return null;

  return createClient(url, key!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
