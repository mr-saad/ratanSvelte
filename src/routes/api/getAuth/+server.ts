import query from "$lib/query.js"

export async function GET(req) {
	let auth = { userId: "", username: "", email: "", status: false, cart: [] }
	const userId = req.cookies.get("svelteUserId")
	if (userId) {
		const q = `*[_type=="user" && _id==$userId][0]{
		_id,username,email,
		"cart":*[_type=="product" && _id in ^.cart[]._ref]{
		_id,slug,title,price,"slug":slug.current,
		"image":images[0].asset->{url}
		}}`
		const user = await query(q, { userId })

		if (user?._id) {
			auth = {
				userId: user._id,
				username: user.username,
				email: user.email,
				status: true,
				cart: user.cart
			}
		}
	}

	return new Response(JSON.stringify(auth))
}
