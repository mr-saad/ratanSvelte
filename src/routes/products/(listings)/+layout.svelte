<script lang="ts">
  import type { LayoutProps } from "./$types"
  import FilterBtns from "./FilterBtns.svelte"

  const { data, children }: LayoutProps = $props()
</script>

<div class="content_container grid gap-5 md:grid-cols-[20rem_auto]">
  <FilterBtns categories={data.categories} />
  <main>
    {@render children()}
  </main>
</div>
