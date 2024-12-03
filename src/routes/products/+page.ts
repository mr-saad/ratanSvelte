import type { PageLoad } from "./$types"

export const load: PageLoad = async (req) => {
	const prods = await (await req.fetch("/api/getProducts")).json()
	return { prods }
}
