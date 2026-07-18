<script lang="ts">
  import type { LayoutProps } from "./$types"
  import FilterBtns from "./FilterBtns.svelte"

  const { data, children }: LayoutProps = $props()
</script>

<div class="content_container grid gap-5 pt-23! md:grid-cols-[auto_auto]">
  <FilterBtns categories={data.categories} />
  <main>
    {@render children()}
  </main>
</div>
