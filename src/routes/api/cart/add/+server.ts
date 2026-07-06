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
    if (!_id) return Response.json({ message: "id not found", ok: false }, { status: 400 })
    try {
      const res = await sanity
        .patch(verify.payload.userId as string)
        .setIfMissing({ cart: [] })
        .append("cart", [{ _type: "product", _ref: _id }])
        .commit({ autoGenerateArrayKeys: true })

      if (res?._id) return Response.json({ message: "Success", ok: true })
    } catch (error: any) {
      if (error instanceof errors.JWSSignatureVerificationFailed) {
        return Response.json({ message: "Unauthorized", ok: false }, { status: 401 })
      }

      console.error(error)
      return Response.json(
        { message: error?.message || "Failed to add to cart", ok: false },
        { status: 500 }
      )
    }
  }
  return Response.json({ message: "Failed to add to cart", ok: false }, { status: 401 })
}
