import { writable } from "svelte/store"
import type { Auth } from "../types"
// import { env } from "$env/dynamic/public"
const VERCEL_URL = "https://ratan-svelte.vercel.app"

export const auth = writable<Auth>({ email: "", status: false, userId: "", username: "", cart: [] })

async function get() {
	const res = await (await fetch(VERCEL_URL + "/api/getAuth")).json()
	auth.set(res)
}
get()
