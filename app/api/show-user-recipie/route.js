import createClient from "@/app/utils/supabaseServerClient";
import NextCors from "nextjs-cors";

export async function GET(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const supabase = createClient();

  const {
    data: { user },
  } = supabase.auth.getUser();

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }));
  }

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
