<script lang="ts">
	import { page } from "$app/stores"
	import { getContext, onDestroy } from "svelte"
	import type { Auth } from "../types"
	import type { Writable } from "svelte/store"
	let cartLength = $state(0)
	const cart = getContext<Writable<Auth>>("auth")
	const unsub = cart.subscribe((val) => (cartLength = val.cart.length))
	onDestroy(unsub)
</script>

<nav>
	<h1>Svelte</h1>
	<ul>
		<li>
			<a class:active={$page.url.pathname === "/"} href="/">Home</a>
		</li>
		<li>
			<a class:active={$page.url.pathname.includes("/products")} href="/products">Products</a>
		</li>
		<li>
			<a class:active={$page.url.pathname === "/cart"} href="/cart">
				Cart{cartLength > 0 ? "(" + cartLength + ")" : null}
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding: 1rem 5rem;
		border-bottom: 1px solid #888;
		& ul {
			display: flex;
			align-items: center;
			list-style: none;
			gap: 1rem;
			& a {
				padding-bottom: 0.2rem;
				text-decoration: none;
				color: currentColor;
				&.active {
					border-bottom: 1px solid currentColor;
				}
			}
		}
	}
	@media (width<=640px) {
		nav {
			padding: 1.2rem;
		}
	}
</style>
