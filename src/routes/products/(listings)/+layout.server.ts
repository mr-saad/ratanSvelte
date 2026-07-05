import sanity from "$lib/server/sanity.server"

export const load = async () => {
  const q = `
      {
        "products":*[_type=="product"]|order(_createdAt desc){_id,"slug":slug.current,title,type,price,"image":images[0].asset->url},
        "categories":array::unique(*[_type=="product"].type)
      }
    `
  const res = await sanity.fetch(q)
  return { products: res.products, categories: res.categories }
}
