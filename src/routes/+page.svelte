<script lang="ts">
  import { auth } from "$lib/store.svelte"
</script>

<svelte:head>
  <title>Ratan Bandhej SvelteKit</title>
</svelte:head>
<h1>Welcome to Ratan Bandhej but with SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation.
</p>
<br />
<p>
  With NextJS <a target="_blank" referrerpolicy="no-referrer" href="https://ratanbandhej.shop"
    >ratanbandhej.shop</a
  >
</p>
<br />
<p>
  {#if !auth.loading}
    {#if auth.status}
      <a href="/account">Your Account</a>
    {:else}
      <a href="/sign-in">Sign In</a>
    {/if}
  {/if}
</p>
