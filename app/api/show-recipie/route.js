import createClient from "@/app/utils/supabaseServerClient";

export async function POST(req) {
  const supabase = createClient();

  const {
    data: { user },
  } = supabase.auth.getUser();

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }));
  }

  const slug = await req.json();

  const { data, error } = await supabase
    .from("recipies")
    .select("*")
    .eq("title", slug.finalSlug);

  if (error) {
    return new Response(JSON.stringify({ message: "Error fetching record" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data));
}
