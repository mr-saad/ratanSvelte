export type Prod = {
	_id: string
	slug: string
	title: string
	price: number
	image: { url: string }
}
export type ProdType = Prod & {
	description: string
	type: string
}
export type Auth = {
	userId: string
	username: string
	email: string
	status: boolean
	cart: Prod[]
}
