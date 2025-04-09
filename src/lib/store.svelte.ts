import type { Auth } from "../types"

export const auth = $state<Auth>({
  email: "",
  status: false,
  userId: "",
  username: "",
  cart: [],
  loading: true
})
