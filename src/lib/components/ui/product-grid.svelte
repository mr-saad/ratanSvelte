<script lang="ts">
  import { cn } from "$lib/utils"
  const { children, class: className, ...restProps }: { children: any; class?: string } = $props()
</script>

<div {...restProps} class={cn("grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4", className)}>
  {@render children?.()}
</div>
