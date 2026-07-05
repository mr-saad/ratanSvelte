<script lang="ts">
  import Product from "$lib/components/Product.svelte"
  import type { PageData } from "./$types"
  import ImgSwiper from "./ImgSwiper.svelte"
  import ProductDetails from "./ProductDetails.svelte"
  const { data }: { data: PageData } = $props()
</script>

<svelte:head>
  <title>{data.product.title} | Ratan Bandhej</title>
  <meta name="description" content={data.product.description} />
  <meta name="keywords" content={data.product.title.split(" ").join(", ")} />
</svelte:head>

<div class="content_container">
  <div class="card grid overflow-clip md:grid-cols-[auto_1fr]">
    <ImgSwiper images={data.product.images} title={data.product.title} />
    <ProductDetails {...data.product} />
  </div>
  {#if data.similarProducts.length}
    <h2 class="heading mt-20 mb-2">You Might Also Like</h2>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {#each data.similarProducts as similar}
        <Product {...similar} />
      {/each}
    </div>
  {/if}
</div>
