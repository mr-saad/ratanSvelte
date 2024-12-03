<script lang="ts">
	import { writable } from "svelte/store"
	import Navbar from "../components/Navbar.svelte"
	import type { Auth } from "../types"
	import { setContext, type Snippet } from "svelte"
	import type { LayoutServerData } from "./$types"

	const { children, data }: { data: LayoutServerData; children: Snippet } = $props()

	const auth = writable<Auth>({ email: "", status: false, userId: "", username: "", cart: [] })
	$effect.pre(() => {
		auth.set(data.auth)
	})

	setContext("auth", auth)
</script>

<Navbar />
<div class="container">{@render children()}</div>

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
