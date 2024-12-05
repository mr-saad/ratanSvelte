import mutate from "$lib/mutate.js"

export const POST = async (req) => {
	const userId = req.cookies.get("svelteUserId")
	if (!userId) return new Response(JSON.stringify({ message: "Unauthorized", ok: false }))

	const { _id } = await req.request.json()
	try {
		const res = await mutate([
			{
				patch: {
					id: userId,
					unset: [`cart[_ref=="${_id}"]`]
				}
			}
		])
		if (res?.transactionId) return new Response(JSON.stringify({ message: "Success", ok: true }))
	} catch (error) {
		return new Response(JSON.stringify({ message: (error as Error).message, ok: false }), {
			status: 500
		})
	}
}
