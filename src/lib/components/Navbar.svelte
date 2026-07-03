<script lang="ts">
  import Links from "./Links.svelte"
  import { page } from "$app/state"

  import MenuToggler from "./MenuToggler.svelte"
  import ThemeToggle from "./ThemeToggle.svelte"
  import CartLink from "./CartLink.svelte"

  const pathname = $derived(page.url.pathname)
</script>

<nav
  class={`nav ${pathname === "/" ? "fixed" : "sticky"} top-0 z-12 grid items-center w-full grid-cols-[1fr_2fr_1fr]  border-b border-white/10 bg-[#111]/90 px-5 py-2 shadow-xl backdrop-blur-[2px] select-none md:text-base lg:px-20`}
>
  <MenuToggler />
  <a
    aria-label="Home"
    title="Ratan Bandhej"
    href="/"
    class={"w-max justify-self-center text-[2.2rem] font-semibold text-white md:justify-self-start "}
  >
    Ratan Bandhej
  </a>

  <Links />

  <div class="flex items-center gap-4 justify-self-end">
    <div class="hidden text-white md:block">
      <ThemeToggle />
    </div>
    <CartLink />
    <div class="hidden md:block">
      <!-- <AccountLink /> -->
    </div>
  </div>
</nav>
