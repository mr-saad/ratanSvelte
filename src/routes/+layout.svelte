<script lang="ts">
	import Navbar from "../components/Navbar.svelte"
	const { children } = $props()
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
