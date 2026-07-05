<script>
  const { slug, index, image, title, type } = $props()
</script>

<div class="card group relative overflow-hidden">
  <a href={`/products/${type}/${slug}`}>
    {#if image}
      <img
        fetchPriority={index === 0 ? "high" : "low"}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
        alt={slug}
        src={`${image}?w=480&auto=format`}
        width={400}
        height={400}
        class="aspect-square w-full object-cover object-top transition duration-400 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
      />
    {/if}
    <div
      class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#111]/80 to-transparent p-4 opacity-0 transition group-focus-within:opacity-100 group-hover:opacity-100"
    >
      <h2 class="text-base text-white capitalize">{title}</h2>
    </div>
  </a>
</div>
