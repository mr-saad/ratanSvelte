import { tokenKey } from "$env/static/private"
import sanity from "$lib/server/sanity.server"
import { jwtVerify, errors } from "jose"

export const POST = async ({ request, cookies }) => {
  const token = cookies.get("svelteUser")
  if (!token) return Response.json({ message: "Unauthorized", ok: false }, { status: 401 })

  const encoder = new TextEncoder()
  const verify = await jwtVerify(token, encoder.encode(tokenKey))

  if (verify) {
    const { _id } = await request.json()
    if (!_id) return Response.json({ message: "_id not found", ok: false }, { status: 400 })

    try {
      const res = await sanity
        .patch(verify.payload.userId as string)
        .unset([`cart[_ref=="${_id}"]`])
        .commit()
      if (res?._id) return Response.json({ message: "Success", ok: true })
    } catch (error: any) {
      if (error instanceof errors.JWSSignatureVerificationFailed) {
        return Response.json({ message: "Unauthorized", ok: false }, { status: 401 })
      }

      return Response.json(
        { message: error?.message || "Failed to remove from cart", ok: false },
        { status: 500 }
      )
    }
  }
  return Response.json({ message: "Unauthorized", ok: false }, { status: 401 })
}
