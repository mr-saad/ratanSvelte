import { env } from "$env/dynamic/private"
import type { Prod } from "../../../types"

export async function GET(req) {
	const q = `*[_type=="product"]{_id,"slug":slug.current,title,price,"image":images[0].asset->{url}}`

	const prods: Prod[] = (
		await (await req.fetch(env.queryUrl + `?query=${encodeURIComponent(q)}`)).json()
	).result
	return new Response(JSON.stringify(prods), {
		headers: {
			"Cache-Control": "public, max-age=600",
			"Content-Type": "application/json"
		}
	})
}
