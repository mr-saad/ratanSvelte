<script>
  import Button from "$lib/components/ui/button/button.svelte"

  let showCartBtn = $state(true)
</script>

{#if showCartBtn}
  <Button onclick={() => (showCartBtn = !showCartBtn)} class="btn mt-4">
    <span class="flex items-center justify-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
      </svg>
      Add to Cart
    </span>
  </Button>
{:else}
  <Button
    variant="destructive"
    onclick={() => (showCartBtn = !showCartBtn)}
    class="btn mt-4 border-red-700! bg-red-700! text-white! hover:bg-transparent! hover:text-red-700!"
  >
    <span class="flex items-center justify-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
      </svg>
      Remove from Cart
    </span>
  </Button>
{/if}
