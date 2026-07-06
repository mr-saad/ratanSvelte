<script lang="ts">
  import { onMount } from "svelte"
  import { register } from "swiper/element/bundle"
  import type { Swiper } from "swiper/types"

  const { images, title }: { images: string[]; title: string } = $props()

  let mainSwiper: HTMLElement & { swiper: Swiper }
  let thumbSwiper: HTMLElement & { swiper: Swiper }

  onMount(() => {
    register()
    mainSwiper.swiper.thumbs.swiper = thumbSwiper.swiper
    mainSwiper.swiper.thumbs.init()
  })
</script>

<div class="max-w-md min-w-0">
  <swiper-container bind:this={mainSwiper} watch-slides-progress>
    {#each images as img, index}
      <swiper-slide lazy={index === 0 ? "false" : "true"}>
        <img
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? "eager" : "lazy"}
          alt={title}
          src={img}
          width={400}
          height={400}
          class={`aspect-square w-full cursor-grab object-cover object-top select-none active:cursor-grabbing`}
        />
      </swiper-slide>
    {/each}
  </swiper-container>

  <swiper-container
    bind:this={thumbSwiper}
    class="thumbSlider mt-2"
    slides-per-view={5}
    space-between={8}
  >
    {#each images as img, index}
      <swiper-slide lazy={index === 0 ? "false" : "true"} class="opacity-70">
        <img
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? "eager" : "lazy"}
          alt={title}
          src={`${img}?w=100&auto=format`}
          width={400}
          height={400}
          class={`aspect-square w-full cursor-pointer object-cover object-top select-none active:cursor-grabbing`}
        />
      </swiper-slide>
    {/each}
  </swiper-container>
</div>
