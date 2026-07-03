<script lang="ts">
  import { onMount } from "svelte"
  import { navigating } from "$app/state"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import "./app.css"
  import { auth, emptyAuth } from "$lib/store/auth.svelte"

  const { children } = $props()

  onMount(() => {
    const getAuth = async () => {
      try {
        const res = await fetch("/api/getAuth")
        const data = await res.json()
        if (data?.username) auth.set(data)
        else auth.set(emptyAuth)
      } catch (err) {
        auth.set(emptyAuth)
        console.error(err)
      }
    }
    getAuth()
  })
</script>

<svelte:head>
  <title>Ratan Bandhej | One Place for all Your Bandhani Needs</title>
</svelte:head>

<Navbar />
<main class="min-h-screen">
  {#if navigating.to}
    <p class="p-5 md:px-20">Navigating to {navigating.to.url.pathname}</p>
  {:else}
    {@render children()}
  {/if}
</main>
<Footer />
