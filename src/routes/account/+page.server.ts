import { tokenKey } from "$env/static/private"
import { redirect } from "@sveltejs/kit"
import { jwtVerify } from "jose"
import type { PageServerLoadEvent } from "./$types";

export const prerender = false

export async function load({ cookies }: PageServerLoadEvent) {
  const token = cookies.get("svelteUser")
  if (!token) return redirect(302, "/sign-in")

  try {
    const encoder = new TextEncoder()
    const ver = await jwtVerify(token, encoder.encode(tokenKey))
    if (!ver) {
      redirect(302, "/sign-in")
    }
  }
  catch (e: any) {
    cookies.delete("svelteUser", { path: "/" });
    console.error(e)
    redirect(302, "/sign-in")
  }
}

