<script lang="ts">
  import type { PageProps } from "./$types"
  import Carousel from "./Carousel.svelte"
  import Sections from "./Sections.svelte"
  const { data }: PageProps = $props()
</script>

<svelte:head>
  <title>Home | Ratan Bandhej</title>
</svelte:head>

<header
  class={`relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-2 before:h-full before:w-full before:bg-linear-to-l before:from-transparent before:to-[#111]/90`}
>
  <img
    fetchPriority="high"
    decoding="async"
    loading="eager"
    placeholder="blur"
    sizes="100vw"
    src={`${data.home.headerImage.image}?w=1280&auto=format`}
    class="absolute h-full w-full object-cover object-top select-none md:object-center"
    alt={"Ratan Bandhej Cover Image"}
  />
  <div class="z-10 px-5 text-white md:px-20">
    <h1 class={"text-7xl font-extrabold [text-shadow:0_0_10px_rgba(0,0,0,0.5)] "}>Ratan Bandhej</h1>
    <p class="text-2xl">One Place For All Your Bandhani Needs</p>
  </div>
</header>
<div class="home mb-10">
  <h1 class="heading arrivals mb-0! p-5 pt-10 text-4xl! md:px-20">Fresh Crafts</h1>
  <Carousel products={data.home.newArrivals} />
</div>
<div class="content_container">
  <Sections sections={data.home.sections} />
</div>
