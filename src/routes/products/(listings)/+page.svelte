<script lang="ts">
  import { page } from "$app/state"
  import Product from "$lib/components/Product.svelte"
  import ProductGrid from "$lib/components/ui/product-grid.svelte"
</script>

<svelte:head>
  <title>Products | Ratan Bandhej</title>
</svelte:head>

<ProductGrid>
  {#if page.data.products.length}
    {#each page.data.products as prod, index}
      <Product {...prod} {index} />
    {/each}
  {:else}
    <p>No Products</p>
  {/if}
</ProductGrid>
