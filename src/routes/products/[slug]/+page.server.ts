import { env } from "$env/dynamic/private"
import type { /* Auth */ ProdType } from "../../../types"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params /* cookies */ }) => {
	// const userId = cookies.get("svelteUserId")
	// console.log(userId)
	const slugQuery = `*[_type=="product" && slug.current==$slug][0]{_id,"slug":slug.current,type,description,title,price,"image":images[0].asset->{url}}`
	const slugReq = fetch(
		env.queryUrl + `?query=${encodeURIComponent(slugQuery)}&$slug="${params.slug}"`
	).then((data) => data.json())
	// const authQuery = `*[_type=="user" && _id==$userId][0]{_id,username,email}`
	// const authReq = fetch(
	// 	env.queryUrl + `?query=${encodeURIComponent(authQuery)}&$userId="${userId}"`
	// ).then((data) => data.json())

	// let auth: Auth = {
	// 	userId: "",
	// 	username: "",
	// 	email: "",
	// 	status: false
	// }
	const reqs = [slugReq]

	// if (userId) {
	// 	reqs.push(authReq)
	// }

	const res = await Promise.all(reqs)
	// if (res[1]?.result?._id) {
	// 	auth = {
	// 		userId: res[1]?.result?._id,
	// 		username: res[1]?.result?.username,
	// 		email: res[1]?.result?.email,
	// 		status: true
	// 	}
	// }
	const prod: ProdType = res[0]?.result
	return { prod /* auth */ }
}
