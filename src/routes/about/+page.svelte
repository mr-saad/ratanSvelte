<script lang="ts">
  import { Button } from "$lib/components/ui/button"
  import ProductGrid from "$lib/components/ui/product-grid.svelte"
  import ArrowRight from "@lucide/svelte/icons/arrow-right"
  import Gem from "@lucide/svelte/icons/gem"
  import Users from "@lucide/svelte/icons/users"
  import Leaf from "@lucide/svelte/icons/leaf"
  import type { Component } from "svelte"
</script>

<svelte:head>
  <title>About Us | Ratan Bandhej</title>
  <meta
    name="description"
    content="Learn more about Ratan Bandhej, our mission to preserve the traditional art of Bandhani and our commitment to supporting skilled artisans from Gujarat, India."
  />
  <meta
    name="keywords"
    content="Ratan Bandhej, About Us, Bandhani, Indian Textiles, Traditional Art, Artisans, Gujarat, Handcrafted, Tie-Dye, Cultural Heritage"
  />
</svelte:head>

{#snippet Insight({ icon, title, description }: { icon: any; title: string; description: string })}
  <div>
    <div class="flex items-center gap-2">
      <div class="rounded-xl bg-rose-100 p-3 text-rose-700">
        <svelte:component this={icon} size={24} />
      </div>
      <h3 class="font-serif text-xl">{title}</h3>
    </div>
    <p>
      {description}
    </p>
  </div>
{/snippet}

<div class="content_container pt-23!">
  <section class="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-center">
    <div class="shrink-0">
      <span class="text-sm font-medium tracking-widest uppercase"> Est. 2019 • Bhuj, Gujarat </span>
      <h1 class="leading-tighter font-serif text-4xl">
        Weaving stories, <br />
        <span class="highlight italic">one knot at a time.</span>
      </h1>
    </div>
    <p class="max-w-xl self-end text-right md:text-xl">
      We are a collective of artisans dedicated to preserving the ancient art of Bandhani. Every
      piece tells a story of patience, precision and the vibrant culture of Kachchh.
    </p>
  </section>

  <!-- Visual Grid - Using CSS Grid instead of absolute positioning  -->
  <section class="mb-24">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-12">
      <!-- Large Main Image  -->
      <div class="overflow-hidden rounded-2xl bg-rose-200 md:col-span-8">
        <img
          fetchpriority="high"
          loading="eager"
          width={400}
          height={400}
          src="/images/working.jpg"
          alt="Artisan working"
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <!-- Two stacked smaller images  -->
      <div class="grid grid-rows-2 gap-5 md:col-span-4">
        <div class="overflow-hidden rounded-2xl bg-rose-200">
          <img
            loading="lazy"
            width={400}
            height={400}
            src="/images/fabric.jpg"
            alt="Fabric detail"
            class="w-full object-cover"
          />
        </div>
        <div
          class="flex flex-col items-start justify-center rounded-2xl bg-rose-900 p-8 text-white"
        >
          <h3 class="mb-2 font-serif text-3xl">100%</h3>
          <p class="text-rose-300">Handcrafted by master artisans.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. The Process / Values - Clean 3-Column Layout  -->
  <section class="mx-auto mb-16 max-w-7xl">
    <ProductGrid class={"grid-cols-1 gap-5 xl:grid-cols-3"}>
      {@render Insight({
        icon: Users,
        title: "Community First",
        description:
          "We work directly with families in rural Kachchh, ensuring fair wages and sustaining the livelihood of our artisan partners."
      })}
      {@render Insight({
        icon: Leaf,
        title: "Sustainable Dyes",
        description:
          "Our colors are derived from nature indigo, turmeric and madder root keeping our fabrics safe for your skin and the earth."
      })}
      {@render Insight({
        icon: Gem,
        title: "Heirloom Quality",
        description:
          "Bandhani is not fast fashion. It is art intended to be passed down through generations, aging gracefully with every wear."
      })}
    </ProductGrid>
  </section>
</div>
<section class="bg-rose-100 px-5 py-20 text-center dark:bg-rose-900">
  <h2 class="mb-6 font-serif text-3xl">Experience the tradition.</h2>
  <Button href={"/products"}>
    View Latest Collection <ArrowRight size={18} />
  </Button>
</section>

<!--
<h1 class="heading">About Us</h1>
<p class="mb-5">
  At Ratan Bandhej, we celebrate the vibrant heritage and artistry of traditional Indian textiles.
  We are passionate about preserving and promoting the rich cultural legacy of Bandhani, a
  centuries-old tie-dye technique originating from the colorful state of Gujarat, India.
</p>
<p class="mb-5">
  Bandhani is known for its distinctive patterns created through the laborious process of tying
  and dyeing. Our skilled artisans meticulously tie thousands of tiny knots by hand, forming
  intricate designs on the fabric. These knots resist the dye, resulting in beautiful patterns
  when the fabric is dyed. It is a testament to the artisans&apos; craftsmanship and attention to
  detail.
</p>
<p class="mb-5">
  We work closely with talented artisans from different regions of Gujarat, ensuring that their
  skills are recognized and valued. By supporting fair trade practices, we strive to empower these
  artisans, providing them with a sustainable livelihood while preserving their traditional craft.
  Each Bandhani product you find on our website is a labor of love and a testament to the
  artisans&apos; dedication.
</p>
<p class="mb-5">
  We invite you to explore our collection and discover the intricate beauty of Bandhani. Whether
  you are attending a special occasion, looking for a statement piece, or simply embracing the
  elegance of Indian textiles, Bandhani offers you an exquisite range of products to choose from.
</p>
<p class="mb-5">
  Thank you for joining us on this journey of celebrating art, culture, and craftsmanship. We hope
  you enjoy exploring the vibrant world of Bandhani and find something that resonates with your
  style and passion.
</p>
Warm regards,
<h1 class={"heading"}>Ratan Bandhej</h1> -->
