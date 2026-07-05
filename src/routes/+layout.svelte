<script lang="ts">
  import { onMount } from "svelte"
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
        if (data?.username) auth.value = data
        else auth.value = emptyAuth
      } catch (err) {
        auth.value = emptyAuth
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
  {@render children()}
</main>
<Footer />
