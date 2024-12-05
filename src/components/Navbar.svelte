<script lang="ts">
	import { page } from "$app/stores"
	import { auth } from "$lib/store.svelte"
	const cartLength = $derived(auth.auth.cart.length)
</script>

<nav>
	<h1><a href="/">RatanSvelte</a></h1>
	<ul>
		<li>
			<a class:active={$page.url.pathname === "/"} href="/">Home</a>
		</li>
		<li>
			<a class:active={$page.url.pathname.includes("/products")} href="/products">Products</a>
		</li>
		<li>
			<a class="shop" href="/cart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					style="vertical-align: bottom;"
					><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path
						d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
					/>
				</svg>
				<span>{cartLength > 0 ? cartLength : null}</span>
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
			& .shop {
				position: relative;
				& span {
					position: absolute;
					top: -8px;
					right: -8px;
					width: 17px;
					line-height: 17px;
					font-size: 15px;
					text-align: center;
					border-radius: 1000px;
					background: white;
					color: black;
					@media (prefers-color-scheme: light) {
						background: black;
						color: #fff;
					}
				}
			}
		}
		& h1 > a {
			color: currentColor;
			text-decoration: none;
		}
	}
	@media (width<=640px) {
		nav {
			padding: 1.2rem;
		}
	}
</style>
