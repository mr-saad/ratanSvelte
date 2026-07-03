import sanity from "$lib/server/sanity.server"

export const load = async () => {
  const q = `*[_type=="product"]|order(_createdAt desc){_id,"slug":slug.current,title,type,price,"image":images[0].asset->{url}}`
  const prods = await sanity.fetch(q)
  const categories = [...new Set(prods.map((p) => p.type))]
  return { prods, categories }
}
