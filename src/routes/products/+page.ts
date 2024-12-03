import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
	const prods = await (await fetch("/api/getProducts")).json()
	return { prods }
}
