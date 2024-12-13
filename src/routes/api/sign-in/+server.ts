import { env } from "$env/dynamic/private"
import query from "$lib/query.js"
import { SignJWT } from "jose"

export async function POST(req) {
	const { username, email } = await req.request.json()
	if (username !== "" && email !== "") {
		const q = `*[_type=="user" && username==$username && email==$email][0]{_id,username,email,
		"cart":*[_type=="product"&&_id in ^.cart[]._ref]{
			_id,title,price,"slug":slug.current,
			"image":images[0].asset->{url}
		}}`
		const user = await query(q, { username, email })
		if (user?._id) {
			const encoder = new TextEncoder()
			const token = await new SignJWT({ userId: user._id })
				.setProtectedHeader({ alg: "HS256" })
				.sign(encoder.encode(env.tokenKey))
			req.cookies.set("svelteUser", token, {
				path: "/",
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
			})
			return Response.json({
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
		return Response.json({ message: "Invalid Credentials", ok: false })
	}
	return Response.json({ message: "Empty Fields Detected", ok: false })
}
