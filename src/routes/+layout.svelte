<script lang="ts">
	import { writable } from "svelte/store"
	import Navbar from "../components/Navbar.svelte"
	import type { Auth } from "../types"
	import { onMount, setContext } from "svelte"

	const { children } = $props()
	let loaded = $state(false)

	const auth = writable<Auth>({ email: "", status: false, userId: "", username: "", cart: [] })
	onMount(async () => {
		const res: Auth = await (await fetch("/api/getAuth")).json()
		auth.set(res)
		loaded = true
	})

	setContext("auth", auth)
</script>

<Navbar />
<div class="container">
	{#if loaded}
		{@render children()}
	{:else}
		<p>Please Wait</p>
	{/if}
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
			font-family: system-ui;
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
