import { goto } from "$app/navigation"
import { auth } from "$lib/store/auth.svelte"

export async function addToCart({ _id, title, slug, type, images }: any) {
  if (!auth.value.status) return goto("/sign-in")
  auth.value.cart.push({ _id, title, slug, type, image: { url: images[0] } })
  try {
    await fetch("/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id })
    })
  } catch (error) {
    auth.value.cart = auth.value.cart.filter((item) => item._id !== _id)
    alert("Failed to add to cart")
    console.error(error)
  }
}
