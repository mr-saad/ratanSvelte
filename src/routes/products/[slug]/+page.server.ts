import { env } from "$env/dynamic/private"
import type { ProdType } from "../../../types"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
	const slugQuery = `*[_type=="product" && slug.current==$slug][0]{_id,"slug":slug.current,type,description,title,price,"image":images[0].asset->{url}}`
	const slugReq = fetch(
		env.queryUrl + `?query=${encodeURIComponent(slugQuery)}&$slug="${params.slug}"`
	).then((data) => data.json())

	const reqs = [slugReq]

	const res = await Promise.all(reqs)
	const prod: ProdType = res[0]?.result
	return { prod }
}
