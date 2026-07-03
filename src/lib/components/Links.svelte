<script>
  import { page } from "$app/state"

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

  const CloseNav = () => {
    document.querySelector("nav ul").classList.remove("grid")
    document.querySelector("nav ul").classList.add("hidden")
    document.querySelector(".line1").classList.remove("rotate-45", "translate-y-2")
    document.querySelector(".line2").classList.remove("-rotate-45", "-translate-y-[2px]")
  }

  $effect(() => {
    const nav = document.querySelector("nav")

    const listener = document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) || e.target.tagName === "A" || e.target.tagName === "svg")
        CloseNav()
    })

    return () => removeEventListener("click", listener)
  })

  const pathname = $derived(page.url.pathname)
</script>

<ul
  class={`col-span-3 row-start-2 mt-5 hidden grid-flow-row border-t border-white/10 pt-5 text-white capitalize md:col-span-1 md:row-start-auto md:mt-0 md:grid md:grid-flow-col md:place-content-center md:border-none md:pt-0`}
>
  <li class="md:inline">
    <a
      class={`block pb-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
        pathname === "/" ? "opacity-100" : "opacity-60"
      }`}
      href={"/"}
    >
      Home
    </a>
  </li>
  {#each links as link}
    <li class="md:inline">
      <a
        class={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
          pathname.startsWith(link.url) ? "opacity-100" : "opacity-60"
        }`}
        href={link.url}
      >
        {link.text}
      </a>
    </li>
  {/each}

  <div class="md:hidden">
    <!-- <AccountLink /> -->
  </div>
  <div class="sm:hidden">
    <!-- <ThemeToggle /> -->
  </div>
</ul>
