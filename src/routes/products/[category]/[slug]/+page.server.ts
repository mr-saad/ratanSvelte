import sanity from "$lib/server/sanity.server"
import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
  const q = `*[slug.current==$slug][0]{
      _id,
      "slug":slug.current,
      title,
      type,
      "images":images[].asset->url,
      specs,
      description,
      colours,
      price
    }`
  const similarQ = `
  *[type==$type && _id!=$_id]|order(_createdAt desc)[0...4] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->url,
  }`

  const product = await sanity.fetch(q, { slug: params.slug })
  if (!product) error(404, { message: `Not Found: "${params.slug}"` })
  const similarProducts = await sanity.fetch(similarQ, { type: product.type, _id: product._id })
  return {
    product,
    similarProducts
  }
}
