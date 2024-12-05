import { env } from "$env/dynamic/private"

export default async (mutations: object[]) => {
	const res = await (
		await fetch(env.mutateUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${env.sanityToken}`
			},
			body: JSON.stringify({ mutations })
		})
	).json()
	if (res?.error) {
		console.error(res.error?.description)
		throw new Error(res.error?.description)
	}
	return res
}
