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
