<script lang="ts">
  import type { PageServerData } from "./$types"
  const { data }: { data: PageServerData } = $props()
</script>

<svelte:head>
  <title>Products | Ratan Bandhej SvelteKit</title>
</svelte:head>
<div class="grid">
  {#each data.prods as prod}
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
        <p>₹{prod.price}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  .prod {
    display: flex;

    img {
      border-radius: 5px;
      max-width: 100%;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: top;
      border-radius: 5px;
    }
    > div {
      padding-left: 1rem;
      a {
        text-decoration: none;
        color: currentColor;
        font-weight: bold;
      }
      p {
        margin-top: 0.2rem;
        color: #888;
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
