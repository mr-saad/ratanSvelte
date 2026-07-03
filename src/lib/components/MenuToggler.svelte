<script>
  const openNav = () => {
    ;["rotate-45", "translate-y-2"].map((cls) =>
      document.querySelector(".line1").classList.toggle(cls)
    )
    ;["-rotate-45", "-translate-y-[2px]"].map((cls) =>
      document.querySelector(".line2").classList.toggle(cls)
    )
    document.querySelector("nav ul").classList.toggle("hidden")
  }
</script>

<button
  title="Menu"
  tabIndex={0}
  class={`z-20 flex h-3 flex-col justify-between justify-self-start md:hidden`}
  onclick={openNav}
  onkeyup={(e) => {
    e.preventDefault()
    if (e.key === "Enter") openNav()
  }}
>
  <span class={`line1 h-0.5 w-6.5 origin-center rounded-md bg-white`}></span>
  <span class={`line2 h-0.5 w-6.5 origin-center rounded-md bg-white`}></span>
</button>
