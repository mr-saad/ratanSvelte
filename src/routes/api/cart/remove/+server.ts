import { tokenKey } from "$env/static/private"
import sanity from "$lib/server/sanity.server"
import { jwtVerify } from "jose"

export const POST = async (req) => {
  const token = req.cookies.get("svelteUser")
  if (!token) return Response.json({ message: "Unauthorized", ok: false })

  const encoder = new TextEncoder()
  const ver = await jwtVerify(token, encoder.encode(tokenKey))
  if (ver) {
    const { _id } = await req.request.json()
    try {
      const res = await sanity
        .patch(ver.payload.userId as string)
        .unset([`cart[_ref=="${_id}"]`])
        .commit()
      if (res?.transactionId) return Response.json({ message: "Success", ok: true })
    } catch (error: any) {
      return Response.json({ message: error.message, ok: false })
    }
  }
  return Response.json({ message: "Unauthorized", ok: false })
}
