import sanity from "$lib/server/sanity.server"

export const load = async () => {
  const home = await sanity.fetch(
    `{
        "headerImage":*[_type=="headerImage"][0]{"image":image.asset->url},
        "newArrivals": *[_type=="product"][0..$count]{
              _id,
              title,
              description,
              type,
              "image": images[0].asset->url,
              price,
              "slug": slug.current
        },
        "products": *[_type=="product"]{
              _id,
              title,
              description,
              type,
              "image": images[0].asset->url,
              price,
              "slug": slug.current
        }
       }`,
    { count: 5 }
  )

  console.log(home)

  return { home }
}
