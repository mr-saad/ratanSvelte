<script lang="ts">
  import Product from "$lib/components/Product.svelte"
  import type { PageProps } from "./$types"

  const { data }: PageProps = $props()
</script>

<div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
  {#if data.products.length}
    {#each data.products as prod, index}
      <Product {...prod} {index} />
    {/each}
  {:else}
    <p>No Products in "{data.category}"</p>
  {/if}
</div>
