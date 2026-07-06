export type CartItem = {
  _id: string
  title: string
  slug: string
  type: string
  image: { url: string }
}

export type Auth = {
  email: string
  status: boolean
  userId: string
  username: string
  cart: CartItem[]
  loading: boolean
}

export const emptyAuth = {
  email: "",
  status: false,
  userId: "",
  username: "",
  cart: [],
  loading: true
}

export const auth = $state<{ value: Auth }>({ value: emptyAuth })
