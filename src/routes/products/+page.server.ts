import { env } from "$env/dynamic/private"
import type { Prod } from "../../types"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const q = `*[_type=="product"]{_id,"slug":slug.current,title,price,"image":images[0].asset->{url}}`
	const prodsStream = async (): Promise<Prod[]> =>
		(await (await fetch(env.queryUrl + `?query=${encodeURIComponent(q)}`)).json()).result
	return { prodsStream: prodsStream() }
}
