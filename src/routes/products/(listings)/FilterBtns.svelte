<script>
  import { page } from "$app/state"
  import { cn } from "$lib/utils"

  const { categories } = $props()
  const activeCategory = $derived(decodeURIComponent(page.url.pathname.split("/")[2] || ""))
</script>

<aside class="card flex flex-col gap-2 self-start p-5">
  <a
    href={`/products`}
    class={cn(
      "border-b border-transparent transition",
      !activeCategory && "border-black/20 dark:border-white/20"
    )}
  >
    All Products
  </a>
  {#each categories as category}
    <a
      href={`/products/${category}`}
      class={cn(
        "border-b border-transparent transition",
        activeCategory === category && "border-black/20 dark:border-white/20"
      )}
    >
      {category}
    </a>
  {/each}
</aside>
