<script lang="ts">
  import { cn } from "$lib/utils"
  import type { EmblaCarouselType } from "embla-carousel"
  import useEmblaCarousel from "embla-carousel-svelte"

  const { images, title }: { images: string[]; title: string } = $props()
  let embla = $state<EmblaCarouselType | undefined>(undefined)
  let emblaThumb = $state<EmblaCarouselType | undefined>(undefined)
  let selectedSnap = $state(0)

  const setActiveSlideIndex = (api: EmblaCarouselType) => (selectedSnap = api.selectedScrollSnap())
  const navigateTo = (index: number) => embla?.scrollTo(index)
  const onThumbClick = (index: number) => {
    selectedSnap = index
    navigateTo(index)
  }

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    embla = event.detail
    setActiveSlideIndex(embla)
    embla.on("reInit", setActiveSlideIndex)
    embla.on("select", (api: EmblaCarouselType) => {
      setActiveSlideIndex(api)
      emblaThumb?.scrollTo(api.selectedScrollSnap())
    })
  }

  const onThumbInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaThumb = event.detail
  }
</script>

<div class="max-w-md min-w-0">
  <div
    class="embla__viewport overflow-clip [--slide-size:100%]"
    use:useEmblaCarousel
    onemblaInit={onInit}
  >
    <div class="embla__container flex">
      {#each images as img, index}
        <div class="embla__slide flex-[0_0_var(--slide-size,100%)]">
          <img
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            alt={title}
            src={img}
            width={400}
            height={400}
            class={`aspect-square w-full cursor-grab object-cover object-top select-none active:cursor-grabbing`}
          />
        </div>
      {/each}
    </div>
  </div>
  <div
    class="embla-thumbs__viewport overflow-clip [--slide-size:20%]"
    onemblaInit={onThumbInit}
    use:useEmblaCarousel
  >
    <div class="embla-thumbs__container flex gap-2">
      {#each images as img, index}
        <div
          tabindex="0"
          role="button"
          onkeyup={(e) => {
            if (e.key === "Enter" || e.key === " ") onThumbClick(index)
          }}
          onclick={() => onThumbClick(index)}
          class={cn("flex-[0_0_var(--slide-size,20%)] transition", {
            "opacity-70": selectedSnap !== index
          })}
        >
          <img
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            alt={title}
            src={`${img}?w=100&auto=format`}
            width={80}
            height={80}
            class={`aspect-square w-full cursor-pointer object-cover object-top select-none active:cursor-grabbing`}
          />
        </div>
      {/each}
    </div>
  </div>
</div>
