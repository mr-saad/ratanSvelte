import { tokenKey } from "$env/static/private"
import sanity from "$lib/server/sanity.server"
import { redirect } from "@sveltejs/kit"
import { jwtVerify } from "jose"

export async function load(req) {
  const token = req.cookies.get("svelteUser")
  if (!token) return redirect(308, "/sign-in")

  const encoder = new TextEncoder()
  const ver = await jwtVerify(token, encoder.encode(tokenKey))

  if (ver) {
    const q = `*[_type=="user" && _id==$userId][0]{_id}`
    const user = await sanity.fetch(q, { userId: ver.payload.userId })
    if (!user) {
      throw redirect(308, "/sign-in")
    }
  }
}
