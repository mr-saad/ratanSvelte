<script lang="ts">
  import { page } from "$app/state"
  import Product from "$lib/components/Product.svelte"
  import type { PageProps } from "./$types"
  import FilterBtns from "./FilterBtns.svelte"
  const { data }: PageProps = $props()

  const search = $derived(page.url.searchParams)

  let products = $derived(
    search.get("category")
      ? data.prods.filter(({ type }) => type === search.get("category"))
      : data.prods
  )
  $effect(() => {
    if (search.get("category")) {
      products = data.prods.filter(({ type }) => type === search.get("category"))
    } else {
      products = data.prods
    }
  })
</script>

<svelte:head>
  <title>Products | Ratan Bandhej</title>
</svelte:head>

<div class="content_container">
  <FilterBtns categories={data.categories} />
  <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
    {#if products.length}
      {#each products as prod, index}
        <Product {...prod} {index} />
      {/each}
    {:else}
      <p>No Products in "{search.get("category")}"</p>
    {/if}
  </div>
</div>
