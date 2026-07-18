<script lang="ts">
  import { page } from "$app/state"
  import { cn } from "$lib/utils"
  import ThemeToggle from "./ThemeToggle.svelte"

  const links = [
    {
      text: "Products",
      url: "/products"
    },
    {
      text: "About",
      url: "/about"
    },
    {
      text: "Contact",
      url: "/contact"
    }
  ]

  let { navOpen, onClose } = $props()
  const pathname = $derived(page.url.pathname)
</script>

<ul
  class={cn(
    "col-span-3 row-start-2 flex-col pt-5 text-black capitalize md:col-span-1 md:col-start-2 md:row-start-1 md:flex-row md:justify-center md:pt-0 dark:text-white ",
    navOpen ? "flex" : "hidden md:flex"
  )}
>
  <li class="">
    <a
      onclick={onClose}
      class={`block pb-2 transition hover:opacity-100 focus-visible:opacity-100  md:px-2 md:py-0 ${
        pathname === "/" ? "opacity-100" : "opacity-60"
      }`}
      href={"/"}
    >
      Home
    </a>
  </li>
  {#each links as link}
    <li class="">
      <a
        onclick={onClose}
        class={`block py-2 transition hover:opacity-100 focus-visible:opacity-100  md:px-2 md:py-0 ${
          pathname.startsWith(link.url) ? "opacity-100" : "opacity-60"
        }`}
        href={link.url}
      >
        {link.text}
      </a>
    </li>
  {/each}
  <li class="pt-2 md:hidden"><ThemeToggle /></li>
</ul>
