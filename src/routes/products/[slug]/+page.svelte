<script lang="ts">
	import { goto } from "$app/navigation"
	import { getContext, onDestroy } from "svelte"
	import type { PageServerData } from "./$types"
	import type { Auth } from "../../../types"
	import type { Writable } from "svelte/store"
	const { data }: { data: PageServerData } = $props()

	const prod = data.prod
	let status = $state(false)

	const auth = getContext<Writable<Auth>>("auth")

	let isInCart = $state(false)
	const unsub = auth.subscribe((val) => {
		status = val.status
		for (let item of val.cart) {
			if (item._id === prod._id) {
				isInCart = true
				break
			}
		}
	})

	function add() {
		if (!status) return goto("/sign-in")
		auth.update((prev) => ({
			...prev,
			cart: [...prev.cart, prod]
		}))
	}
	function remove() {
		auth.update((prev) => ({ ...prev, cart: prev.cart.filter((all) => all._id !== prod._id) }))
		isInCart = false
	}

	onDestroy(unsub)
</script>

<title>{prod.title} | Ratan Bandhej SvelteKi</title>
<div class="grid">
	<img
		decoding="async"
		loading="lazy"
		fetchpriority="low"
		width="400"
		height="400"
		src={prod.image.url}
		alt={prod.title}
	/>
	<div>
		<h1>{prod.title}</h1>
		<table>
			<tbody>
				<tr><th>Type</th> <td>{prod.type}</td></tr>
				<tr><th>Description</th> <td>{prod.description}</td></tr>
				<tr><th>Price</th> <td>₹{prod.price}</td></tr>
			</tbody>
		</table>
		{#if !isInCart}
			<button onclick={add}>Add to Cart</button>
		{:else}
			<button onclick={remove}>Remove from Cart</button>
		{/if}
	</div>
</div>

<style>
	h1 {
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
