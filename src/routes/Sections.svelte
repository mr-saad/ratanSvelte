<script>
  import Product from "$lib/components/Product.svelte"
  import Button from "$lib/components/ui/button/button.svelte"
  const { products } = $props()

  const dupattas = products.filter((prod) => prod.type === "Dupatta").slice(0, 3)
  const sarees = products.filter((prod) => prod.type === "Saree").slice(0, 3)
  const dresses = products.filter((prod) => prod.type === "Dress").slice(0, 3)
  const topMaterials = products.filter((prod) => prod.type === "Top Material").slice(0, 3)
</script>

{@render Section("Dupatta", dupattas)}
{@render Section("Saree", sarees)}
{@render Section("Dress", dresses)}
{@render Section("Top Material", topMaterials)}

{#snippet Section(title, products)}
  <div class="my-20">
    <div class="mb-5 flex items-center justify-between gap-5">
      <h3 class="heading mb-0! shrink-0">{title}</h3>
      <hr class="w-full border-black/5 dark:border-white/5" />
      <Button role="a" href={"/products?category=" + title}>Explore</Button>
    </div>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {#each products as prod}
        <Product key={prod.slug} {...prod} />
      {/each}
    </div>
  </div>
{/snippet}
