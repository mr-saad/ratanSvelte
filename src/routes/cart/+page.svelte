<script lang="ts">
	import { auth } from "$lib/store.svelte"
</script>

<title>Cart | Ratan Bandhej SvelteKit</title>
<div class="grid">
	{#if auth.auth.cart.length}
		{#each auth.auth.cart as prod}
			<a href={"/products/" + prod.slug} class="prod">
				<img
					decoding="async"
					loading="lazy"
					fetchpriority="low"
					width="100"
					height="100"
					src={prod.image.url}
					alt={prod.title}
				/>
				<div>
					<strong>{prod.title}</strong>
					<p>₹{prod.price}</p>
				</div>
			</a>
		{/each}
	{:else}
		<p>Empty</p>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		gap: 1.5rem;
	}
	.prod {
		display: flex;
		text-decoration: none;
		color: currentColor;
		border: 1px solid #888;
		border-radius: 5px;
		position: relative;
		& img {
			max-width: 100%;
			height: 100%;
			aspect-ratio: 1;
			object-fit: cover;
			object-position: top;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
		& > div {
			padding: 1rem;
			& p {
				margin-top: 0.2rem;
				color: #888;
			}
		}
	}
	@media (width>=640px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (width>=1024px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
