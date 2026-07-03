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
        "sections":[{
          "title": "Dupatta",
          "products": *[_type=="product" && type=="Dupatta"][0..7]{
              _id,
              title,
              description,
              type,
              "image": images[0].asset->url,
              price,
              "slug": slug.current
          }},
          {
            "title": "Saree",
            "products": *[_type=="product" && type=="Saree"][0..7]{
              _id,
              title,
              description,
              type,
              "image": images[0].asset->url,
              price,
              "slug": slug.current
          }},
          {
            "title": "Dress",
            "products": *[_type=="product" && type=="Dress"][0..7]{
              _id,
              title,
              description,
              type,
              "image": images[0].asset->url,
              price,
              "slug": slug.current
          }},
          {
            "title": "Top Material",
            "products": *[_type=="product" && type=="Top Material"][0..7]{
                _id,
                title,
                description,
                type,
                "image": images[0].asset->url,
                price,
                "slug": slug.current
            }
          }
          ]
        }`,
    { count: 5 }
  )

  return { home }
}
