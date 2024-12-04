import type { Auth } from "../types"

export const auth = $state<{ auth: Auth }>({
	auth: { email: "", status: false, userId: "", username: "", cart: [] }
})
