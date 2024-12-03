import type { PageServerLoad } from "./$types"

import { env } from "$env/dynamic/private"
import type { Prod } from "../../types"

export const load: PageServerLoad = async ({ setHeaders }) => {
	const q = `*[_type=="product"]{_id,"slug":slug.current,title,price,"image":images[0].asset->{url}}`

	const prods: Prod[] = (
		await (await fetch(env.queryUrl + `?query=${encodeURIComponent(q)}`)).json()
	).result
	setHeaders({
		"Cache-Control": "public, max-age=600, s-maxage=600"
	})
	return { prods }
}
