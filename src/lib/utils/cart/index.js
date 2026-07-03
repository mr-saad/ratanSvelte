import { goto } from "$app/navigation"
import { auth } from "$lib/store/auth.svelte"

export async function add(prod) {
  if (!auth.status) return goto("/sign-in")
  auth.cart.push(prod)
  const res = await (
    await fetch("/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: prod._id })
    })
  ).json()
  if (!res.ok) {
    alert(res.message)
    auth.cart.pop()
  }
}

export async function remove(prod) {
  auth.cart = auth.cart.filter((all) => all._id !== prod._id)
  const res = await (
    await fetch("/api/cart/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: prod._id })
    })
  ).json()
  if (!res.ok) {
    alert(res.message)
    auth.cart.push(prod)
  }
}
