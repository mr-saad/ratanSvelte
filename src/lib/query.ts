import { PUBLIC_queryUrl } from "$env/static/public"

type Params = {
  userId?: string
  slug?: string
  username?: string
  email?: string
}
export default async (query: string, params?: Params) => {
  let p: string = ""
  for (const key in params) {
    p += `&$${key}="${params[key as keyof Params]}"`
  }
  const res = await (
    await fetch(PUBLIC_queryUrl + `?query=${encodeURIComponent(query)}${p}`)
  ).json()
  if (res?.error) {
    console.error(res.error?.description)
    throw new Error(res.error?.description)
  }
  return res.result
}
