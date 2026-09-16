export function isSafeSupabaseBrowserKey(key: string | undefined): boolean {
  if (!key) return false;
  if (key.startsWith("sb_publishable_")) return true;
  if (key.startsWith("sb_secret_")) return false;
  try {
    const payload = key.split(".")[1];
    if (!payload) return false;
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))).role === "anon";
  } catch {
    return false;
  }
}
