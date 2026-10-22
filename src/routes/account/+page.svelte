<script lang="ts">
  import { goto } from "$app/navigation"
  import Button from "$lib/components/ui/button/button.svelte"
  import { auth, emptyAuth } from "$lib/store/auth.svelte"

  let details = $derived({ username: auth.value.username, email: auth.value.email })

  async function onclick() {
    const conf = confirm("You'll be Signed Out. Sure?")
    if (conf) {
      const res = await (await fetch("/api/sign-out")).json()
      if (res.ok) {
        auth.value = emptyAuth
        return goto("/sign-in")
      }
    }
  }
</script>

<svelte:head>
  <title>Account | Ratan Bandhej Sveltekit</title>
</svelte:head>

<div class="content_container pt-20!">
  <h1>Account</h1>
  <p><strong>Username:</strong> {details.username}</p>
  <p><strong>E-Mail:</strong> {details.email}</p>
  <Button {onclick} type="button">Sign Out</Button>
</div>
