import { env } from "$env/dynamic/private"
import { redirect } from "@sveltejs/kit"

export async function load(req) {
	const userId = req.cookies.get("svelteUserId")

	if (userId) {
		const q = `*[_type=="user" && _id==$userId][0]{_id}`
		const res = await (
			await fetch(env.queryUrl + `?query=${encodeURIComponent(q)}&$userId="${userId}"`)
		).json()
		if (!res.result?._id) {
			throw redirect(308, "/sign-in")
		}
	} else {
		throw redirect(308, "/sign-in")
	}
}
