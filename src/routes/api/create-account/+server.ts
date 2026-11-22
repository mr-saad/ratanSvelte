import { json, type RequestEvent } from "@sveltejs/kit"
import { createAccSchema } from "$lib/schemas/createAccSchema"
import sanity from "$lib/server/sanity.server"

export async function POST({ request }: RequestEvent) {
  const parsedFormData = createAccSchema.safeParse(await request.json())
  if (parsedFormData.success) {
    try {
      const res = await sanity.fetch(`*[_type=="user"&&email==$email][0]`, {
        email: parsedFormData.data.email,
      })
      if (res) {
        return json({ message: "User with this Email already exists", ok: false }, {
          status: 409
        })
      }

      await sanity.create({
        _type: "user",
        ...parsedFormData.data,
        verified: false,
        cart: [],
      })

      return json({ message: "Inserted", ok: true })
    } catch (error: any) {
      console.error(error)
      return json({ message: error?.message, ok: false }, { status: 500 })
    }
  } else {
    return json({ message: parsedFormData.error.issues[0].message, ok: false }, { status: 400 })
  }
}
