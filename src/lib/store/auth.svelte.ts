import { writable } from "svelte/store"

export type CartItem = {
  id: string
  title: string
  slug: string
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

export const auth = writable<Auth>(emptyAuth)
