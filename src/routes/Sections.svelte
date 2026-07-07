<script lang="ts">
  import Product from "$lib/components/Product.svelte"
  import Button from "$lib/components/ui/button/button.svelte"
  import ProductGrid from "$lib/components/ui/product-grid.svelte"
  const { sections } = $props()
</script>

{#each sections as sec}
  {@render Section({ ...sec })}
{/each}

{#snippet Section({ title, products })}
  <div class="my-20">
    <div class="mb-5 flex items-center justify-between gap-5">
      <h3 class="heading shrink-0">{title}</h3>
      <hr class="w-full border-black/5 dark:border-white/5" />
      <Button role="a" href={`/products/${title}`}>Explore</Button>
    </div>
    <ProductGrid>
      {#each products as prod}
        <Product key={prod.slug} {...prod} />
      {/each}
    </ProductGrid>
  </div>
{/snippet}
