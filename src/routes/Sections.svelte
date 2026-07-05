<script>
  import Product from "$lib/components/Product.svelte"
  import Button from "$lib/components/ui/button/button.svelte"
  const { sections } = $props()
</script>

{#each sections as sec}
  {@render Section({ ...sec })}
{/each}

{#snippet Section({ title, products })}
  <div class="my-20">
    <div class="mb-5 flex items-center justify-between gap-5">
      <h3 class="heading mb-0! shrink-0">{title}</h3>
      <hr class="w-full border-black/5 dark:border-white/5" />
      <Button role="a" href={`/products/${title}`}>Explore</Button>
    </div>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {#each products as prod}
        <Product key={prod.slug} {...prod} />
      {/each}
    </div>
  </div>
{/snippet}
