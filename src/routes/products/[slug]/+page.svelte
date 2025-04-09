<script lang="ts">
  import { auth } from "$lib/store.svelte"
  import { add, remove } from "$lib/utils"
  import type { PageServerData } from "./$types"
  const { data }: { data: PageServerData } = $props()

  const prod = data.prod

  let isInCart = $state(false)

  $effect(() => {
    isInCart = auth.cart.some((item) => item._id === prod._id)
  })

  let specs = prod.specs.split(";")
</script>

<svelte:head>
  <title>{prod.title} | Ratan Bandhej SvelteKi</title>
</svelte:head>
<div class="grid">
  <img
    decoding="async"
    loading="eager"
    fetchpriority="high"
    width="400"
    height="400"
    src={prod.image.url}
    alt={prod.title}
  />
  <div>
    <h1>{prod.title}</h1>
    <table>
      <tbody>
        {#each specs as spec}
          <tr><th>{spec.split(":=")[0]}</th><td>{spec.split(":=")[1]}</td></tr>
        {/each}
        <tr><th>Price</th> <td>₹{prod.price}</td></tr>
      </tbody>
    </table>
    <p style="margin-top: 1rem;">{prod.description}</p>
    {#if !auth.loading}
      {#if !isInCart}
        <button onclick={() => add(prod)}>Add to Cart</button>
      {:else}
        <button onclick={() => remove(prod)}>Remove from Cart</button>
      {/if}
    {/if}
  </div>
</div>

<style>
  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  img {
    aspect-ratio: 1;
    border-radius: 5px;
    object-fit: cover;
    object-position: top;
    width: 100%;
    max-width: 450px;
    height: 100%;
    justify-self: center;
  }
  .grid {
    display: grid;
    gap: 2rem;
  }
  button {
    @media (width<640px) {
      width: 100%;
    }
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  table th {
    vertical-align: top;
    text-align: left;
    padding-inline-end: 2rem;
  }
  table th,
  table td {
    padding-block: 0.5rem;
  }
  @media (width>768px) {
    img {
      justify-self: end;
    }
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
