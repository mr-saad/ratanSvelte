<script lang="ts">
  import { page } from "$app/state"
  import { cn } from "$lib/utils"

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

<button
  onclick={(e) => {
    if (e.target === e.currentTarget) onClose()
  }}
  class={cn(
    "fixed top-16.5 left-0 col-span-3 row-start-2 h-[85vh] w-full items-start text-start md:static  md:col-span-1 md:col-start-2  md:row-start-1 md:h-auto",
    navOpen ? "flex" : "hidden md:flex"
  )}
>
  <ul
    class={cn(
      "flex w-full flex-col bg-black/70 px-5 py-2 text-white capitalize md:flex-row md:justify-center md:bg-transparent"
    )}
  >
    <li class="">
      <a
        onclick={onClose}
        class={`block pb-2 transition hover:opacity-100  md:px-2 md:py-0 ${
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
          class={`block py-2 transition hover:opacity-100  md:px-2 md:py-0 ${
            pathname.startsWith(link.url) ? "opacity-100" : "opacity-60"
          }`}
          href={link.url}
        >
          {link.text}
        </a>
      </li>
    {/each}
  </ul>
</button>
