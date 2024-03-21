import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value;
        },
        set(name, value, options) {
          req.cookies.set({ name, value, ...options });

          const response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });

          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });

          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    (user && req.nextUrl.pathname === "/") ||
    req.nextUrl.pathname === "/login"
  ) {
    return NextResponse.redirect(new URL("/recipies", req.url));
  }

  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/", "/recipies", "/recipie", "/user-recipies"],
};
