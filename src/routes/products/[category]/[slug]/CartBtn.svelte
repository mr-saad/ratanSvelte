<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import { auth } from "$lib/store/auth.svelte"
  import { addToCart } from "$lib/utils/cart/addToCart"
  import { removeFromCart } from "$lib/utils/cart/removeFromCart"

  const { product } = $props()

  let isInCart = $state(false)
  $effect(() => {
    isInCart = auth.value.cart.some((item) => item._id === product._id)
  })

  const handleAddToCart = async (e: MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  const handleRemoveFromCart = async (e: MouseEvent) => {
    e.preventDefault()
    removeFromCart(product)
  }
</script>

{#if auth.value.loading}{:else if isInCart}
  <Button
    variant="destructive"
    onclick={handleRemoveFromCart}
    class="btn mt-4 border-red-700! bg-red-700! text-white! hover:bg-transparent! hover:text-red-700!"
  >
    <span class="flex items-center justify-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
      </svg>
      Remove from Cart
    </span>
  </Button>
{:else}
  <Button onclick={handleAddToCart} class="btn mt-4">
    <span class="flex items-center justify-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
      </svg>
      Add to Cart
    </span>
  </Button>
{/if}
