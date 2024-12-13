import query from "$lib/query"
import type { Prod, ProdType } from "../../../types"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
	const q = `*[_type=="product" && slug.current==$slug][0]{_id,"slug":slug.current,description,specs,title,price,"image":images[0].asset->{url}}`
	const prod: Prod & ProdType = await query(q, { slug: params.slug })
	return { prod }
}
