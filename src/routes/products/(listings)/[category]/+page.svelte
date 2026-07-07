<script lang="ts">
  import Product from "$lib/components/Product.svelte"
  import ProductGrid from "$lib/components/ui/product-grid.svelte"
  import type { PageProps } from "./$types"

  const { data }: PageProps = $props()
</script>

<ProductGrid>
  {#if data.products.length}
    {#each data.products as prod, index}
      <Product {...prod} {index} />
    {/each}
  {:else}
    <p>No Products in "{data.category}"</p>
  {/if}
</ProductGrid>
