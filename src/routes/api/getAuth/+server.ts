import { tokenKey } from "$env/static/private"
import sanity from "$lib/server/sanity.server"
import { jwtVerify } from "jose"

export async function GET({ cookies }) {
  let auth = { userId: "", username: "", email: "", status: false, cart: [] }
  const token = cookies.get("svelteUser")
  if (!token) return Response.json(auth)

  const encoder = new TextEncoder()
  const ver = await jwtVerify(token, encoder.encode(tokenKey))
  if (ver) {
    const q = `*[_type=="user" && _id==$userId][0]{
  		_id,username,email,
  		"cart":cart[defined(_ref)]->{
  			_id,slug,type,title,price,"slug":slug.current,
  			"image":images[0].asset->{url}
  		}
		}`
    const user = await sanity.fetch(q, { userId: ver.payload.userId })
    if (user) {
      auth = {
        userId: user._id,
        username: user.username,
        email: user.email,
        status: true,
        cart: user.cart
      }
    }
  }
  return Response.json(auth)
}
