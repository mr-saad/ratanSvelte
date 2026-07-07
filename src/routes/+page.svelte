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
  class={`relative isolate flex min-h-[95vh] w-full items-center  bg-stone-950 before:absolute before:-z-1 before:h-full before:w-full before:bg-linear-to-l before:from-transparent before:to-stone-950/90`}
>
  <img
    fetchPriority="high"
    decoding="async"
    loading="eager"
    placeholder="blur"
    sizes="100vw"
    src={`${data.home.headerImage.image}?w=1280&auto=format`}
    class="absolute -z-2 h-full w-full object-cover object-top select-none md:object-center"
    alt={"Ratan Bandhej Cover Image"}
  />
  <div class="mx-auto grow px-5 text-white lg:max-w-7xl">
    <h1 class={"font-serif text-7xl"}>Ratan Bandhej</h1>
    <p class="text-2xl leading-none">One Place For All Your Bandhani Needs</p>
  </div>
</header>
<div class="content_container mt-5">
  <h1 class="heading mb-2 text-4xl">Fresh Crafts</h1>
  <Carousel products={data.home.newArrivals} />
</div>
<div class="content_container">
  <Sections sections={data.home.sections} />
</div>
