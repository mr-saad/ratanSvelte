<script lang="ts">
  import { page } from "$app/state"
  import Product from "$lib/components/Product.svelte"
</script>

<svelte:head>
  <title>Products | Ratan Bandhej</title>
</svelte:head>

<div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
  {#if page.data.products.length}
    {#each page.data.products as prod, index}
      <Product {...prod} {index} />
    {/each}
  {:else}
    <p>No Products</p>
  {/if}
</div>
