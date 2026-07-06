<script lang="ts">
  import { auth } from "$lib/store/auth.svelte"
  import { onMount } from "svelte"
  import Button from "./ui/button/button.svelte"
  import SheetClose from "./ui/sheet/sheet-close.svelte"
  import SheetContent from "./ui/sheet/sheet-content.svelte"
  import SheetFooter from "./ui/sheet/sheet-footer.svelte"
  import SheetHeader from "./ui/sheet/sheet-header.svelte"
  import SheetTitle from "./ui/sheet/sheet-title.svelte"
  import SheetTrigger from "./ui/sheet/sheet-trigger.svelte"
  import Sheet from "./ui/sheet/sheet.svelte"
  import ShoppingCart from "@lucide/svelte/icons/shopping-cart"
  import Trash from "@lucide/svelte/icons/trash"

  let cart = $derived(auth.value.cart)
</script>

<Sheet>
  <SheetTrigger class="relative cursor-pointer">
    <ShoppingCart title="Shopping Cart" size={22} color="#fff" role="button" />
    {#if cart.length > 0}
      <span
        class="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-rose-700 text-white"
        >{cart.length}</span
      >
    {/if}
  </SheetTrigger>
  <SheetContent class="border-black/10 bg-white">
    <SheetHeader>
      <SheetTitle class="text-xl">Cart</SheetTitle>
    </SheetHeader>
    <div class="grid gap-4 overflow-y-auto px-5">
      {#if cart.length > 0}
        {#each cart as prod}
          <SheetClose class="flex gap-2">
            <a href={`/products/${prod.type}/${prod.slug}`} class="flex gap-2">
              <div class="flex gap-2">
                <img
                  src={`${prod.image.url}?w=100&auto=format`}
                  width={50}
                  height={50}
                  class="aspect-square h-full object-cover"
                  alt={prod.title}
                />
                <strong class="line-clamp-2 text-start">{prod.title}</strong>
              </div>
              <Trash
                size={17}
                class="shrink-0 text-red-600"
                title="Remove from cart"
                role="button"
              />
            </a>
          </SheetClose>
        {/each}
      {/if}
    </div>
    <SheetFooter>
      <SheetClose class="">
        <Button variant="outline" class="w-full">Close</Button>
      </SheetClose>
      {#if cart.length > 0}
        <Button>Checkout</Button>
      {/if}
    </SheetFooter>
  </SheetContent>
</Sheet>
