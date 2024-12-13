export async function GET(req) {
	req.cookies.delete("svelteUser", {
		path: "/"
	})
	return new Response(JSON.stringify({ message: "Signed Out", ok: true }))
}
