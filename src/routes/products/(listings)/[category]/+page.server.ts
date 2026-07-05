import sanity from "$lib/server/sanity.server"

export const load = async ({ params }) => {
  const q = `*[_type=="product" && type == $category]|order(_createdAt desc){_id,"slug":slug.current,title,type,price,"image":images[0].asset->url}`
  const products = await sanity.fetch(q, { category: params.category })
  const categories = [...new Set(products.map((p) => p.type))]
  return { products, categories }
}
