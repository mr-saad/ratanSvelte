<script>
  import { browser } from "$app/environment"

  let theme = $state("light")
  if (browser) theme = localStorage.getItem("ratanTheme") || "light"
  const toggleTheme = () => {
    theme = theme === "dark" ? "light" : "dark"
    localStorage.setItem("ratanTheme", theme)
  }
</script>

<!-- onKeyUp={(e) => {
        e.preventDefault()
        if (e.key === "Enter" || e.key === "Space") toggleTheme()
      }} -->
<button tabIndex={0} onclick={() => toggleTheme()} class="transition md:inline">
  {#if theme === "dark"}
    <svg
      class="cursor-pointer align-middle md:inline"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  {:else}
    <svg
      class="cursor-pointer align-middle md:inline"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  {/if}
</button>
