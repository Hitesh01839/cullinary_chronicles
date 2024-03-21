import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  const user_data = await req.json();

  const {
    data: { user },
  } = supabase.auth.getUser();

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }));
  }

  const { data, error } = await supabase
    .from("recipies")
    .insert([{ title: user_data.title, description: user_data.desc }])
    .select();

  if (error) {
    return new Response(JSON.stringify({ message: "Error inserting records" }));
  }

  return new Response(JSON.stringify({ message: "Inserted the data" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
