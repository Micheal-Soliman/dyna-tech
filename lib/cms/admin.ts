import { createClient } from "@supabase/supabase-js";

export async function verifyCmsAdmin(token: string | undefined) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key || !token) return null;

  const supabase = createClient(url, key, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: userData, error } = await supabase.auth.getUser(token);
  if (error || !userData.user) return null;

  const { data: admin } = await supabase
    .from("cms_admins")
    .select("user_id")
    .eq("user_id", userData.user.id)
    .maybeSingle();

  return admin ? userData.user : null;
}

