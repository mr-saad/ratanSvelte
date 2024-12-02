import { env } from "$env/dynamic/private"

export async function POST(req) {
	const { username, email } = await req.request.json()
	if (username !== "" && email !== "") {
		const q = `*[_type=="user" && username==$username && email==$email][0]{_id,username,email,
		"cart":*[_type=="product"&&_id in ^.cart[]._ref]{
			_id,title,price,"slug":slug.current,
			"image":images[0].asset->{url}
		}}`
		const res = await (
			await fetch(
				env.queryUrl + `?query=${encodeURIComponent(q)}&$username="${username}"&$email="${email}"`
			)
		).json()
		if (res.result?._id) {
			req.cookies.set("svelteUserId", res.result._id, {
				path: "/",
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
			})
			return new Response(
				JSON.stringify({
					message: "Success",
					ok: true,
					auth: {
						userId: res.result._id,
						username: res.result.username,
						email: res.result.email,
						status: true,
						cart: res.result.cart
					}
				})
			)
		}
		return new Response(JSON.stringify({ message: "Invalid Credentials", ok: false }))
	}
	return new Response(JSON.stringify({ message: "Empty Fields Detected", ok: false }))
}
