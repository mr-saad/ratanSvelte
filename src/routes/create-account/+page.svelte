<script lang="ts">
  import { goto } from "$app/navigation"
  import Button from "$lib/components/ui/button/button.svelte"
  import { createAccSchema } from "$lib/schemas/createAccSchema"

  let err = $state("")
  let loading = $state(false)

  const onsubmit = async (e: Event) => {
    e.preventDefault()
    loading = true
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address")
    }
    const parsedData = createAccSchema.safeParse(data)

    try {
      if (parsedData.success) {
        const res = await fetch("/api/create-account", {
          method: "POST",
          body: JSON.stringify(parsedData.data)
        })
        const data = await res.json()
        if (data.ok) {
          goto("/sign-in")
        } else {
          err = data.message
          setTimeout(() => (err = ""), 4000)
        }
      } else {
        err = parsedData.error.issues[0].message
        setTimeout(() => (err = ""), 4000)
      }
    } catch (e: any) {
      err = e.message
    } finally {
      loading = false
    }
  }
</script>

<div class="content_container pt-23!">
  <h1 class="heading mb-4 text-center">Create Account</h1>
  <form {onsubmit} class="mx-auto max-w-lg">
    <div class="grid gap-8">
      <div class="relative">
        <label class="input_label" for="username">Username</label>
        <input
          placeholder=" "
          required
          class="input"
          id="username"
          type="text"
          minLength={3}
          maxLength={20}
          name="username"
        />
      </div>
      <div class="relative">
        <label class="input_label" for="email">E-Mail</label>
        <input placeholder=" " required class="input" id="email" type="email" name="email" />
      </div>
      <div class="relative">
        <label class="input_label" for="phone">Phone</label>
        <input
          minLength={10}
          maxLength={10}
          placeholder=" "
          required
          class="input"
          id="phone"
          name="phone"
          type="tel"
        />
      </div>
      <div class="relative">
        <label class="input_label" for="address">Address</label>
        <textarea
          minLength={10}
          maxLength={60}
          placeholder=" "
          required
          class="input resize-none"
          id="address"
          name="address"
        ></textarea>
      </div>
    </div>
    <div class="text-center">
      <p class="my-4 text-balance">
        By clicking continue, you agree to our
        <a class="underline" href="/terms-conditions">Terms & Conditions</a>
        and
        <a class="underline" href="/privacy-policy">Privacy Policy</a>
      </p>
      <Button type="submit" disabled={loading} class="mb-4">Continue</Button>
      <p>
        Already have one?{" "}
        <a class="underline" href="/sign-in">Sign In</a>
      </p>
    </div>
    {#if err !== ""}
      <p class="text-red-700">{err}</p>
    {/if}
    {#if loading}
      <span>Please Wait</span>{/if}
  </form>
</div>
