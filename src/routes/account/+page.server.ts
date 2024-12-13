import { env } from "$env/dynamic/private"
import query from "$lib/query.js"
import { redirect } from "@sveltejs/kit"
import { jwtVerify } from "jose"

export async function load(req) {
	const token = req.cookies.get("svelteUser")
	if (!token) return redirect(308, "/sign-in")

	const encoder = new TextEncoder()
	const ver = await jwtVerify(token, encoder.encode(env.tokenKey))

	if (ver) {
		const q = `*[_type=="user" && _id==$userId][0]{_id}`
		const user = await query(q, { userId: ver.payload.userId as string })
		if (!user) {
			throw redirect(308, "/sign-in")
		}
	}
}
