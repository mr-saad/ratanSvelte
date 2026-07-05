<script lang="ts">
  import Links from "./Links.svelte"
  import CartLink from "./CartLink.svelte"

  let navOpen = $state(false)
  const handleNavOpen = () => (navOpen = !navOpen)
  const onClose = () => (navOpen = false)
</script>

<nav
  class={`nav fixed top-0 z-3 w-full border-b border-white/10 bg-[#111]/90 px-5 py-2 shadow-xl backdrop-blur-[2px] select-none md:text-base`}
>
  <div class="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center">
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
      <span class={`line1 h-0.5 w-6.5 origin-center rounded-md bg-white`}></span>
      <span class={`line2 h-0.5 w-6.5 origin-center rounded-md bg-white`}></span>
    </button>

    <a
      aria-label="Home"
      title="Ratan Bandhej"
      href="/"
      class={"w-max justify-self-center text-[2.2rem] font-semibold text-white md:justify-self-start "}
    >
      Ratan Bandhej
    </a>

    <Links {navOpen} {onClose} />

    <div class="flex items-center gap-4 justify-self-end">
      <!-- <div class="hidden text-white md:block">
      <ThemeToggle />
    </div> -->
      <CartLink />
      <div class="hidden md:block">
        <!-- <AccountLink /> -->
      </div>
    </div>
  </div>
</nav>
