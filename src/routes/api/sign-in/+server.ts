import { tokenKey } from "$env/static/private"
import sanity from "$lib/server/sanity.server"
import { json, type RequestEvent } from "@sveltejs/kit";
import { SignJWT } from "jose"

export async function POST({ request, cookies }: RequestEvent) {
  const { username, email } = await request.json()
  if (username !== "" && email !== "") {
    const q = `*[_type=="user" && username==$username && email==$email][0]{
      _id,username,email,cart[]->{...,"slug":slug.current,"image":images[0].asset->{url, "lqip":metadata.lqip}}}`
    const user = await sanity.fetch(q, { username, email })
    if (user?._id) {
      const encoder = new TextEncoder()
      const token = await new SignJWT({ userId: user._id })
        .setProtectedHeader({ alg: "HS256" })
        .sign(encoder.encode(tokenKey))

      cookies.set("svelteUser", token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
      })

      return json({
        message: "Success",
        ok: true,
        auth: {
          userId: user._id,
          username: user.username,
          email: user.email,
          status: true,
          cart: user.cart
        }
      })
    }
    return json({ message: "Invalid Credentials", ok: false }, { status: 401 })
  }
  return json({ message: "Empty Fields Detected", ok: false }, { status: 400 })
}
