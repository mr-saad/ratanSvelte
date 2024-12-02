import { env } from "$env/dynamic/private"

export async function GET(req) {
	const userId = req.cookies.get("svelteUserId")
	if (userId) {
		const q = `*[_type=="user" && _id==$userId][0]{
		_id,username,email,
		"cart":*[_type=="product" && _id in ^.cart[]._ref]{
		_id,slug,title,price,"slug":slug.current,
		"image":images[0].asset->{url}
		}}`
		const res = await (
			await fetch(env.queryUrl + `?query=${encodeURIComponent(q)}&$userId="${userId}"`)
		).json()

		if (res.result?._id) {
			return new Response(
				JSON.stringify({
					userId: res.result._id,
					username: res.result.username,
					email: res.result.email,
					status: true,
					cart: res.result.cart
				})
			)
		}
		return new Response(
			JSON.stringify({
				userId: "",
				username: "",
				email: "",
				status: false,
				cart: []
			})
		)
	}
	return new Response(
		JSON.stringify({
			userId: "",
			username: "",
			email: "",
			status: false,
			cart: []
		})
	)
}
