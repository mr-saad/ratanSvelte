<script>
  import { page } from "$app/state"
  import { cn } from "$lib/utils"

  const { categories } = $props()
  const activeCategory = $derived(decodeURIComponent(page.url.pathname.split("/")[2] || ""))
</script>

<aside class="card flex flex-wrap gap-2 self-start p-5 text-center *:grow md:flex-col md:text-left">
  <a
    href={`/products`}
    class={cn(
      "border-b border-transparent transition",
      !activeCategory && " border-current text-black  dark:text-white"
    )}
  >
    All Products
  </a>
  {#each categories as category}
    <a
      href={`/products/${category}`}
      class={cn(
        "border-b border-transparent transition",
        activeCategory === category && " border-current  text-black dark:text-white"
      )}
    >
      {category}
    </a>
  {/each}
</aside>
