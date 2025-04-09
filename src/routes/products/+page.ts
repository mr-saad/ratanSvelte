import type { PageLoad } from "./$types"
import type { Prod } from "../../types"
import query from "$lib/query"

export const load: PageLoad = async ({ setHeaders }) => {
  const q = `*[_type=="product"]|order(_createdAt desc){_id,"slug":slug.current,title,price,"image":images[0].asset->{url}}`

  const prods: Prod[] = await query(q)
  setHeaders({
    "Cache-Control": "public, max-age=600, s-maxage=600"
  })
  return { prods }
}
