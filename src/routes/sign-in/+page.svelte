<script lang="ts">
  import { goto } from "$app/navigation"
  import { auth } from "$lib/store/auth.svelte"
  import { fade } from "svelte/transition"
  import Error from "../+error.svelte"
  import Button from "$lib/components/ui/button/button.svelte"

  let err = $state("")
  let loading = $state(false)

  async function onsubmit(e: SubmitEvent) {
    e.preventDefault()
    loading = true
    const form = new FormData(e.currentTarget as HTMLFormElement)
    const data = { username: form.get("username"), email: form.get("email") }
    try {
      const res = await (
        await fetch("/api/sign-in", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
      ).json()
      if (res.ok) {
        auth.value = res.auth
        goto("/products")
      } else {
        err = res.message
        setTimeout(() => (err = ""), 4000)
      }
    } catch (e: any) {
      console.error(e)
      err = e?.message
    } finally {
      loading = false
    }
  }
</script>

<div class="content_container pt-23!">
  <h1 class="heading text-center">Sign In</h1>
  <form {onsubmit} class="mx-auto mt-10 grid max-w-lg gap-8">
    <div class="relative">
      <label for="username" class="input_label">Username</label>
      <input
        minLength={3}
        maxLength={12}
        required
        type="text"
        name="username"
        id="username"
        class="input"
        placeholder=" "
      />
    </div>
    <div class="relative">
      <label for="email" class="input_label">E-Mail</label>
      <input required type="email" name="email" id="email" class="input" placeholder=" " />
    </div>
    <Button type="submit" disabled={loading} class={"justify-self-center"}>Continue</Button>

    <p>
      Don&apos;t have an account yet?{" "}
      <a href="/create-account" class="underline">Create One</a>
    </p>
    {#if err !== ""}
      <p transition:fade={{ duration: 100 }} class="text-red-700">{err}</p>
    {/if}
    {#if loading}
      <span>Please Wait</span>
    {/if}
  </form>
</div>
