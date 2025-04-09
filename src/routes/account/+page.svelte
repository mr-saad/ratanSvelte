<script lang="ts">
  import { goto } from "$app/navigation"
  import { auth } from "$lib/store.svelte"

  let details = $derived({ username: auth.username, email: auth.email })

  async function onclick() {
    const conf = confirm("You'll be Signed Out. Sure?")
    if (conf) {
      const res = await (await fetch("/api/sign-out")).json()
      if (res.ok) {
        Object.assign(auth, { email: "", status: false, userId: "", username: "", cart: [] })
        return goto("/sign-in")
      }
    }
  }
</script>

<svelte:head>
  <title>Account | Ratan Bandhej Sveltekit</title>
</svelte:head>

<h1>Account</h1>
<br />
<p><strong>Username:</strong> {details.username}</p>
<p><strong>E-Mail:</strong> {details.email}</p>
<br />
<button {onclick} type="button">Sign Out</button>

<style>
  button {
    background: red;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
