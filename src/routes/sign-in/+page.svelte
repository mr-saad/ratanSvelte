<script lang="ts">
	import { goto } from "$app/navigation"
	import { auth } from "$lib/store"

	let err = $state("")

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault()
		const form = new FormData(e.currentTarget as HTMLFormElement)
		const data = { username: form.get("username"), email: form.get("email") }
		const res = await (
			await fetch("/api/sign-in", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			})
		).json()
		if (res.ok) {
			auth.set(res.auth)
			goto("/products")
		} else {
			err = res.message
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
		<button>Sign In</button>
	</form>
	{#if err !== ""}
		<p class="err">{err}</p>
	{/if}
	<p>Don't Have an Account? <a href="https://ratanbandhej.shop/create-account">Create One</a></p>
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
			}
		}
		& .err {
			color: red;
		}
	}
</style>
