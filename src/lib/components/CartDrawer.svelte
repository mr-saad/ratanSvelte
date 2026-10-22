<script>
  import Button, { buttonVariants } from "./ui/button/button.svelte"
  import SheetClose from "./ui/sheet/sheet-close.svelte"
  import SheetContent from "./ui/sheet/sheet-content.svelte"
  import SheetFooter from "./ui/sheet/sheet-footer.svelte"
  import SheetHeader from "./ui/sheet/sheet-header.svelte"
  import SheetTitle from "./ui/sheet/sheet-title.svelte"
  import Trash from "@lucide/svelte/icons/trash"
  import { removeFromCart } from "$lib/utils/cart/removeFromCart"
  import { auth } from "$lib/store/auth.svelte"

  let cart = $derived(auth.value.cart)
</script>

<SheetContent class="border-black/10 bg-white dark:border-white/10 dark:bg-black">
  <SheetHeader>
    <SheetTitle class="heading">Cart</SheetTitle>
  </SheetHeader>
  <div class="grid gap-4 overflow-y-auto px-5">
    {#if cart.length > 0}
      {#each cart as prod}
        <div class="flex justify-between gap-2 border-b border-black/10 pb-4 dark:border-white/10">
          <SheetClose class="text-start">
            <a href={`/products/${prod.type}/${prod.slug}`} class="flex items-start gap-2">
              <img
                src={`${prod.image.url}?w=100&auto=format`}
                width={50}
                height={50}
                class="aspect-square h-full object-cover"
                alt={prod.title}
              />
              <span class="line-clamp-2">{prod.title}</span>
            </a>
          </SheetClose>
          <Trash
            tabindex={0}
            onclick={() => removeFromCart(prod)}
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") removeFromCart(prod)
            }}
            size={17}
            class="shrink-0 cursor-pointer text-red-600"
            title="Remove from cart"
            role="button"
          />
        </div>
      {/each}
    {/if}
  </div>
  <SheetFooter>
    <!-- <SheetClose class={buttonVariants({ variant: "destructive" })}>Close</SheetClose> -->
    {#if cart.length > 0}
      <SheetClose>
        <a href="/checkout" class={`w-full ${buttonVariants({ variant: "default" })}`}>
          Checkout
        </a>
      </SheetClose>
    {/if}
  </SheetFooter>
</SheetContent>
