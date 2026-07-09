<script lang="ts">
  import { onMount } from "svelte"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import "./app.css"
  import { auth, emptyAuth } from "$lib/store/auth.svelte"
  import { theme } from "$lib/store/theme.svelte"

  const { children } = $props()

  onMount(() => {
    theme.value = document.documentElement.classList.contains("dark") ? "dark" : "light"
    const fetchAuth = async () => {
      try {
        const res = await fetch("/api/getAuth")
        const data = await res.json()
        if (data?.username)
          auth.value = { ...data, cart: data.cart.filter(Boolean), loading: false }
        else auth.value = { ...emptyAuth, loading: false }
      } catch (err) {
        auth.value = { ...emptyAuth, loading: false }
        console.error(err)
      }
    }
    fetchAuth()
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
