<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import useEmblaCarousel from "embla-carousel-svelte"
  import { type EmblaCarouselType } from "embla-carousel"
  import Autoplay from "embla-carousel-autoplay"
  import { cn } from "$lib/utils"

  const { products } = $props()

  let embla = $state<EmblaCarouselType | undefined>(undefined)
  let slideCount = $state<number[]>([])
  let selectedSlide = $state(0)

  const setupSlideCount = (api: EmblaCarouselType) => (slideCount = api.scrollSnapList())
  const setActiveSlide = (api: EmblaCarouselType) => (selectedSlide = api.selectedScrollSnap())
  const navigateTo = (index: number) => embla?.scrollTo(index)

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    embla = event.detail
    setupSlideCount(embla)
    setActiveSlide(embla)
    embla.on("reInit", setupSlideCount)
    embla.on("reInit", setActiveSlide)
    embla.on("select", setActiveSlide)
  }
</script>

<div class="embla [--slide-gap:1rem] [--slide-size:100%] md:[--slide-size:50%]">
  <div
    class="embla__viewport overflow-clip"
    onemblaInit={onInit}
    use:useEmblaCarousel={{
      options: {
        breakpoints: { "(min-width:768px)": { slidesToScroll: 2 } }
      },
      plugins: [Autoplay({ delay: 4000, stopOnInteraction: false })]
    }}
  >
    <div class="embla__container flex gap-4">
      {#each products as prod}
        <div
          class="embla__slide group flex-[0_0_calc(var(--slide-size)-0.5rem)] cursor-grab overflow-clip select-none first:pl-0 active:cursor-grabbing"
        >
          <div class="card grid items-center md:grid-cols-2">
            <div class="p-4">
              <h2 title={prod.title} class="highlight line-clamp-2 font-serif text-2xl capitalize">
                {prod.title}
              </h2>
              <p title={prod.description} class="mb-2 line-clamp-2">{prod.description}</p>
              <Button role="a" href={`/products/${prod.type}/${prod.slug}`} class=""
                >View More</Button
              >
            </div>
            {#if prod.image}
              <div class=" overflow-clip md:justify-self-end">
                <img
                  class="aspect-square h-full object-cover object-top transition duration-400 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
                  src={`${prod.image}?w=480&auto=format`}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  alt={prod.title}
                  width={400}
                  height={400}
                />
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="embla__dots mt-5 flex gap-2">
    {#each slideCount as _, index}
      <button
        title={`Slide ${index + 1}`}
        class={cn(
          "embla__dot outline-primary/30 focus-visible:outline-primary h-4 w-4 cursor-pointer rounded-full  outline-2",
          index === selectedSlide && "outline-primary"
        )}
        onclick={() => navigateTo(index)}
      ></button>
    {/each}
  </div>
</div>
