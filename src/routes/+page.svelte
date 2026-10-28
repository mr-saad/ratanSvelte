<script lang="ts">
  import Product from "$lib/components/Product.svelte"
  import type { PageProps } from "./$types"
  import Carousel from "./Carousel.svelte"
  import Sections from "./Sections.svelte"
  const { data }: PageProps = $props()
</script>

<svelte:head>
  <title>Home - Ratan Bandhej</title>
</svelte:head>

<div class="content_container flex gap-3 overflow-x-auto pt-20! pb-0!">
  {#each data.home?.categories as c}
    <a href={"/products/" + c.type} class="group relative shrink-0 overflow-clip">
      <img
        fetchpriority="high"
        class="aspect-square scale-105 object-cover transition duration-300 will-change-transform group-hover:scale-100 group-focus-visible:scale-100"
        alt={c.type}
        style={`background: url(${c.image.lqip}) center / cover no-repeat`}
        src={c.image.url + "?w=200"}
        width="200"
        height="200"
      />
      <div
        class="absolute inset-0 flex items-end bg-linear-to-b from-transparent to-black/70 p-2 text-white md:p-5"
      >
        {c.type}
      </div>
    </a>
  {/each}
</div>

<div class="content_container mt-5">
  <h1 class="heading mb-2 text-4xl">Fresh Crafts</h1>
  <Carousel products={data.home.newArrivals} />
</div>
<div class="content_container">
  <Sections sections={data.home.sections} />
</div>

<header
  class={`relative isolate flex min-h-[95vh] w-full items-center  bg-stone-950 before:absolute before:-z-1 before:h-full before:w-full before:bg-linear-to-b before:from-transparent before:to-[#120005]`}
>
  <img
    fetchPriority="low"
    decoding="async"
    loading="lazy"
    placeholder="blur"
    sizes="100vw"
    style={`background: url(${data.home.headerImage.image.lqip}) center / cover no-repeat`}
    src={`${data.home.headerImage.image.url}?w=1280&auto=format`}
    class="absolute -z-2 h-full w-full object-cover object-top select-none md:object-center"
    alt={"Ratan Bandhej Cover Image"}
  />
  <div class="mx-auto grow px-5 text-white lg:max-w-7xl">
    <h1 class={"font-serif text-7xl leading-none tracking-tighter"}>Ratan Bandhej</h1>
    <p class="text-2xl leading-none tracking-tighter">One Place For All Your Bandhani Needs</p>
  </div>
</header>
