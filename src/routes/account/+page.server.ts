import query from "$lib/query.js"
import { redirect } from "@sveltejs/kit"

export async function load(req) {
	const userId = req.cookies.get("svelteUserId")

	if (userId) {
		const q = `*[_type=="user" && _id==$userId][0]{_id}`
		const user = await query(q, { userId })
		if (!user?._id) {
			throw redirect(308, "/sign-in")
		}
	} else {
		throw redirect(308, "/sign-in")
	}
}
