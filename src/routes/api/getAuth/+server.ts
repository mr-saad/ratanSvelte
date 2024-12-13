import { env } from "$env/dynamic/private"
import query from "$lib/query.js"
import { jwtVerify } from "jose"

export async function GET(req) {
	let auth = { userId: "", username: "", email: "", status: false, cart: [] }
	const token = req.cookies.get("svelteUser")
	if (!token) return Response.json(auth)

	const encoder = new TextEncoder()
	const ver = await jwtVerify(token, encoder.encode(env.tokenKey))
	if (ver) {
		const q = `*[_type=="user" && _id==$userId][0]{
		_id,username,email,
		"cart":*[_type=="product" && _id in ^.cart[]._ref]{
		_id,slug,title,price,"slug":slug.current,
		"image":images[0].asset->{url}
		}}`
		const user = await query(q, { userId: ver.payload.userId as string })
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
