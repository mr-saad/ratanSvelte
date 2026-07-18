<script lang="ts">
  import CartBtn from "./CartBtn.svelte"

  const { _id, images, title, slug, type, price, description, specs, colours } = $props()
  const sepratedSpecs = specs.split(";")
  const separatedColours = colours ? colours.split(";") : []
</script>

<div class="">
  <h1 class="highlight mb-3 text-2xl font-semibold capitalize md:mt-0">
    {title}
  </h1>
  <span>
    <strong class="highlight text-xl">₹{price}</strong> + Shipping
  </span>
  <p class="mt-2 whitespace-pre-wrap">{description}</p>

  <CartBtn product={{ _id, images, title, slug, type, price }} />
  <hr class="mt-5 border-black/5 dark:border-white/5" />
  <table class="border-separate border-spacing-y-5">
    <tbody>
      {#each sepratedSpecs as item}
        <tr>
          <td class="highlight align-top font-bold">
            {item.split(":=")[0]}
          </td>
          <td class="pl-4">{item.split(":=")[1]}</td>
        </tr>
      {/each}
      {#if colours}
        <tr class="py-2 capitalize">
          <td class="highlight align-top font-bold">Instock</td>
          <td class="pl-4">
            {#each separatedColours as clr, index}
              {clr.split("=")[0]} {index < separatedColours.length - 1 ? ", " : ""}
            {/each}
          </td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
