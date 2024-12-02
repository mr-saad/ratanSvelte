export async function GET(req) {
	req.cookies.delete("svelteUserId", {
		path: "/"
	})
	return new Response(JSON.stringify({ message: "Signed Out", ok: true }))
}
