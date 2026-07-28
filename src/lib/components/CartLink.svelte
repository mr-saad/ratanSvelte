<script lang="ts">
  import { auth } from "$lib/store/auth.svelte"
  import CartDrawer from "./CartDrawer.svelte"
  import SheetTrigger from "./ui/sheet/sheet-trigger.svelte"
  import Sheet from "./ui/sheet/sheet.svelte"
  import ShoppingCart from "@lucide/svelte/icons/shopping-cart"

  let cart = $derived(auth.value.cart)
</script>

<Sheet>
  <SheetTrigger class="relative cursor-pointer">
    <ShoppingCart
      title="Shopping Cart"
      size={22}
      color="currentColor"
      class="text-black dark:text-white"
      role="button"
    />
    {#if cart.length > 0}
      <span
        class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-700 text-sm text-white"
        >{cart.length}</span
      >
    {/if}
  </SheetTrigger>
  <CartDrawer />
</Sheet>
