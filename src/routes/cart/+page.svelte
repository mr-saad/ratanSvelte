<script lang="ts">
  import { auth } from "$lib/store.svelte"
  import { remove } from "$lib/utils"
</script>

<svelte:head>
  <title>Cart | Ratan Bandhej SvelteKit</title>
</svelte:head>
<div class="checkout">
  <h1>Cart</h1>
  {#if auth.cart.length}
    <a href="/cart/checkout">Checkout</a>
  {/if}
</div>
<div class="grid">
  {#if auth.cart.length}
    {#each auth.cart as prod}
      <div class="prod">
        <img
          decoding="async"
          loading="lazy"
          fetchpriority="low"
          width="100"
          height="100"
          src={prod.image.url}
          alt={prod.title}
        />
        <div>
          <a href={"/products/" + prod.slug}>
            {prod.title}
          </a>
          <button onclick={() => remove(prod)}>Remove</button>
        </div>
      </div>
    {/each}
  {:else}
    <p>Empty</p>
  {/if}
</div>

<style>
  .checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    a {
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 5px;
      color: #000;
      background: #fff;
      @media (prefers-color-scheme: light) {
        color: #fff;
        background: #000;
      }
    }
  }
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  .prod {
    display: flex;
    position: relative;

    img {
      max-width: 100%;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 5px;
      object-position: top;
    }
    > div {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 1rem;
        color: currentColor;
        text-decoration: none;
        font-weight: bold;
      }
      button {
        margin-top: auto;
        padding: 0.5rem;
        cursor: pointer;
      }
    }
  }
  @media (width>=640px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (width>=1024px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
