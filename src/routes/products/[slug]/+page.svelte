<script lang="ts">
	import { goto } from "$app/navigation"
	import { auth } from "$lib/store.svelte"
	import type { PageServerData } from "./$types"
	const { data }: { data: PageServerData } = $props()

	const prod = data.prod

	let isInCart = $state(false)

	$effect(() => {
		isInCart = auth.auth.cart.some((item) => item._id === prod._id)
	})

	async function add() {
		if (!auth.auth.status) return goto("/sign-in")
		auth.auth.cart.push(prod)
		const res = await (
			await fetch("/api/cart/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ _id: prod._id })
			})
		).json()
		if (!res.ok) {
			alert(res.message)
			auth.auth.cart.pop()
		}
	}
	async function remove() {
		auth.auth.cart = auth.auth.cart.filter((all) => all._id !== prod._id)
		const res = await (
			await fetch("/api/cart/remove", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ _id: prod._id })
			})
		).json()
		if (!res.ok) {
			alert(res.message)
			auth.auth.cart.push(prod)
		}
	}
	let specs = prod.specs.split(";")
</script>

<title>{prod.title} | Ratan Bandhej SvelteKi</title>
<div class="grid">
	<img
		decoding="async"
		loading="eager"
		fetchpriority="high"
		width="400"
		height="400"
		src={prod.image.url}
		alt={prod.title}
	/>
	<div>
		<h1>{prod.title}</h1>
		<table>
			<tbody>
				{#each specs as spec}
					<tr><th>{spec.split(":=")[0]}</th><td>{spec.split(":=")[1]}</td></tr>
				{/each}
				<tr><th>Price</th> <td>₹{prod.price}</td></tr>
			</tbody>
		</table>
		<p style="margin-top: 1rem;">{prod.description}</p>
		{#if !isInCart}
			<button onclick={add}>Add to Cart</button>
		{:else}
			<button onclick={remove}>Remove from Cart</button>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 1.6rem;
		margin-bottom: 0.5rem;
	}
	img {
		aspect-ratio: 1;
		border-radius: 5px;
		object-fit: cover;
		object-position: top;
		width: 100%;
		max-width: 450px;
		height: 100%;
		justify-self: center;
	}
	.grid {
		display: grid;
		gap: 2rem;
	}
	button {
		width: 100%;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	table th {
		vertical-align: top;
		text-align: left;
		padding-inline-end: 2rem;
	}
	table th,
	table td {
		padding-block: 0.5rem;
	}
	@media (width>768px) {
		img {
			justify-self: end;
		}
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
