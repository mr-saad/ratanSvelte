<script lang="ts">
	import { goto } from "$app/navigation"
	import { auth } from "$lib/store.svelte"
	import { fade } from "svelte/transition"

	let err = $state("")
	let disabled = $state(false)

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault()
		const form = new FormData(e.currentTarget as HTMLFormElement)
		const data = { username: form.get("username"), email: form.get("email") }
		disabled = true
		const res = await (
			await fetch("/api/sign-in", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			})
		).json()
		disabled = false
		if (res.ok) {
			auth.auth = res.auth
			goto("/products")
		} else {
			err = res.message
			setTimeout(() => (err = ""), 2000)
		}
	}
</script>

<div>
	<h1>Sign In</h1>
	<form {onsubmit}>
		<input
			required
			minlength={4}
			maxlength={12}
			type="text"
			placeholder="Username"
			name="username"
		/>
		<input required type="email" placeholder="E-Mail" name="email" />
		<button {disabled}>Sign In</button>
	</form>
	<p>Don't Have an Account? <a href="https://ratanbandhej.shop/create-account">Create One</a></p>
	{#if err !== ""}
		<p transition:fade={{ duration: 100 }} class="err">{err}</p>
	{/if}
</div>

<style>
	div {
		display: grid;
		gap: 1rem;
		max-width: 500px;
		margin-inline: auto;
		& form {
			display: grid;
			gap: 1rem;
			& input {
				padding: 0.5rem;
				background: transparent;
				border: 1px solid #888;
				border-radius: 5px;
			}
			& button {
				border-radius: 5px;
				padding: 0.5rem;
				cursor: pointer;
				border: 1px solid;
				transition: opacity 300ms ease;
				&:disabled {
					opacity: 0.5;
				}
			}
		}
		& .err {
			color: red;
		}
	}
</style>
