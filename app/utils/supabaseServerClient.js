import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default function createClient() {
  const cookiStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookiStore.get(name)?.value;
        },
      },
    }
  );
}
