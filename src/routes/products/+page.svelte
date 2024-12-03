<script lang="ts">
	import type { PageServerData } from "./$types"
	const { data }: { data: PageServerData } = $props()
</script>

<title>Products | Ratan Bandhej SvelteKit</title>
<div class="grid">
	{#await data.prodsStream}
		<p>Loading...</p>
	{:then prods}
		{#each prods as prod}
			<a href={"/products/" + prod.slug} class="prod">
				<img
					decoding="async"
					loading="lazy"
					fetchpriority="low"
					width="75"
					height="75"
					src={prod.image.url}
					alt={prod.title}
				/>
				<div>
					<strong>{prod.title}</strong>
					<p>₹{prod.price}</p>
				</div>
			</a>
		{/each}
	{/await}
</div>

<style>
	.grid {
		display: grid;
		gap: 1.5rem;
	}
	.prod {
		display: flex;
		gap: 1rem;
		text-decoration: none;
		color: currentColor;
		padding: 1rem;
		border: 1px solid #888;
		border-radius: 5px;
		& img {
			max-width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
			object-position: top;
			border-radius: 5px;
		}
		& p {
			color: #888;
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
