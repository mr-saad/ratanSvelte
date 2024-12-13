import { env } from "$env/dynamic/private"
import mutate from "$lib/mutate.js"
import { jwtVerify } from "jose"

export const POST = async (req) => {
	const token = req.cookies.get("svelteUser")
	if (!token) return Response.json({ message: "Unauthorized", ok: false })
	const encoder = new TextEncoder()
	const ver = await jwtVerify(token, encoder.encode(env.tokenKey))
	if (ver) {
		const { _id } = await req.request.json()
		try {
			const res = await mutate([
				{
					patch: {
						id: ver.payload.userId,
						setIfMissing: { cart: [] },
						insert: {
							after: "cart[-1]",
							items: [{ _type: "product", _ref: _id }]
						}
					}
				}
			])
			if (res?.transactionId) return Response.json({ message: "Success", ok: true })
		} catch (error) {
			return Response.json({ message: (error as Error).message, ok: false })
		}
	}
	return Response.json({ message: "Unauthorized", ok: false })
}
