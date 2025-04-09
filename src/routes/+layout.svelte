<script lang="ts">
  import { auth } from "$lib/store.svelte"
  import Navbar from "../components/Navbar.svelte"
  import type { Auth } from "../types"
  import { onMount } from "svelte"

  const { children } = $props()

  onMount(async () => {
    const res: Auth = await (await fetch("/api/getAuth")).json()
    Object.assign(auth, res)
    auth.loading = false
  })
</script>

<Navbar />
<div class="container">
  {@render children()}
</div>

<style>
  :global {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      color-scheme: light dark;
      font-family: system-ui, sans-serif;
      scrollbar-width: none;
    }
  }
  .container {
    padding: 1rem 5rem;
  }

  @media (width<=640px) {
    .container {
      padding: 1.2rem;
    }
  }
</style>
