<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import { register } from "swiper/element/bundle"
  register()
  const { products } = $props()

  $effect(() => {
    const swiper = document.querySelector("swiper-container")
    const params = {
      slidesPerView: 1,
      breakpoints: { 640: { slidesPerView: 2 } },
      spaceBetween: 20,
      pagination: true,
      autoplay: true
    }
    Object.assign(swiper, params)
    swiper?.initialize()
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`.swiper{overflow:visible}`)
    swiper.shadowRoot.adoptedStyleSheets = [...swiper?.shadowRoot?.adoptedStyleSheets, sheet]
  })
</script>

<swiper-container
  autoplay="true"
  autoplay-delay="4000"
  autoplay-pause-on-mouse-enter="true"
  pagination-clickable="true"
  class="overflow-clip pb-10"
>
  {#each products as prod}
    <swiper-slide
      class="card group grid! cursor-grab items-center overflow-clip select-none active:cursor-grabbing md:grid-cols-2"
    >
      <div class="p-5">
        <h2 title={prod.title} class="highlight line-clamp-2 font-serif text-2xl capitalize">
          {prod.title}
        </h2>
        <p title={prod.description} class="mb-2 line-clamp-2">{prod.description}</p>
        <Button role="a" href={`/products/${prod.type}/${prod.slug}`} class="">View More</Button>
      </div>
      {#if prod.image}
        <div class="overflow-clip md:justify-self-end">
          <img
            class="aspect-square object-cover object-top transition duration-400 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
            src={`${prod.image}?w=480&auto=format`}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            alt={prod.title}
            width={400}
            height={400}
          />
        </div>
      {/if}
    </swiper-slide>
  {/each}
</swiper-container>
