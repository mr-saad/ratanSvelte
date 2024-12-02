import { env } from "$env/dynamic/private"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const q = `*[_type=="product"]{_id,"slug":slug.current,title,price,"image":images[0].asset->{url}}`
	const { result } = await (await fetch(env.queryUrl + `?query=${encodeURIComponent(q)}`)).json()
	return { data: result }
}
