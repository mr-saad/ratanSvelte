<script>
  import { page } from "$app/state"
  const { categories } = $props()
  const search = $derived(page.url.searchParams)
</script>

<div class={`mb-5 flex-wrap gap-2 flex`}>
  {#each categories as category}
    <a
      href={search.get("category") !== category
        ? `/products?category=${category.replace(/ /g, "+")}`
        : "/products"}
      class={`inline-block supports-[corner-shape:squircle]:rounded-[200px] rounded-md border-2 border-[#111] px-4 py-1 text-[#111] capitalize transition [corner-shape:squircle] dark:border-white dark:text-white hover:bg-[#111] hover:text-white! hover:dark:bg-white hover:dark:text-[#111]! ${
        search.get("category") === category &&
        "bg-[#111] text-white! dark:bg-white dark:text-[#111]!"
      }`}
    >
      {category}
    </a>
  {/each}
</div>
