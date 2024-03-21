import createClient from "@/app/utils/supabaseServerClient";

export async function GET(req) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("recipies")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    return new Response(JSON.stringify({ message: "Error fetching records" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data));
}