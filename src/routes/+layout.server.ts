import { env } from "$env/dynamic/private"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (req) => {
	let auth = { userId: "", username: "", email: "", status: false, cart: [] }
	const userId = req.cookies.get("svelteUserId")
	if (userId) {
		const q = `*[_type=="user" && _id==$userId][0]{
		_id,username,email,
		"cart":*[_type=="product" && _id in ^.cart[]._ref]{
		_id,slug,title,price,"slug":slug.current,
		"image":images[0].asset->{url}
		}}`
		const res = await (
			await req.fetch(env.queryUrl + `?query=${encodeURIComponent(q)}&$userId="${userId}"`)
		).json()

		if (res.result?._id) {
			auth = {
				userId: res.result._id,
				username: res.result.username,
				email: res.result.email,
				status: true,
				cart: res.result.cart
			}
		}
	}

	return { auth }
}
