import query from "$lib/query.js"

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
			req.cookies.set("svelteUserId", user._id, {
				path: "/",
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
			})
			return new Response(
				JSON.stringify({
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
			)
		}
		return new Response(JSON.stringify({ message: "Invalid Credentials", ok: false }))
	}
	return new Response(JSON.stringify({ message: "Empty Fields Detected", ok: false }))
}
