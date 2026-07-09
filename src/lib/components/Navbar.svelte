<script lang="ts">
  import Links from "./Links.svelte"
  import CartLink from "./CartLink.svelte"
  import { cn } from "tailwind-variants"
  import ThemeToggle from "./ThemeToggle.svelte"

  let navOpen = $state(false)
  const handleNavOpen = () => (navOpen = !navOpen)
  const onClose = () => (navOpen = false)
</script>

<nav class={`nav fixed top-0 z-3 w-full  bg-rose-50/80  py-3 backdrop-blur-lg select-none`}>
  <div class="mx-auto grid max-w-7xl grid-cols-[1fr_2fr_1fr] items-center px-5">
    <!-- menu toggler -->
    <button
      title="Menu"
      tabIndex={0}
      class={`z-4 flex h-3 flex-col justify-between justify-self-start md:hidden`}
      onclick={handleNavOpen}
      onkeyup={(e) => {
        e.preventDefault()
        if (e.key === "Enter") handleNavOpen()
      }}
    >
      <span class={cn(`h-0.5 w-6.5 origin-left rounded-md bg-black`, navOpen && "rotate-45")}
      ></span>
      <span
        class={cn(
          `h-0.5 w-6.5 origin-left rounded-md bg-black`,
          navOpen && "translate-y-2 -rotate-45"
        )}
      ></span>
    </button>

    <a
      aria-label="Home"
      title="Ratan Bandhej"
      href="/"
      class={"w-max justify-self-center font-serif text-3xl  text-black md:justify-self-start "}
    >
      Ratan Bandhej
    </a>

    <Links {navOpen} {onClose} />

    <div class="flex items-center gap-4 justify-self-end">
      <!-- <div class="hidden text-white md:block"> -->
      <ThemeToggle />
      <!-- </div> -->
      <CartLink />
      <div class="hidden md:block">
        <!-- <AccountLink /> -->
      </div>
    </div>
  </div>
</nav>
