<script>
  import { page } from "$app/state"
</script>

<div class="content_container text-center pt-20">
  <div class="text-red-700 mb-10">
    <h1 class="text-6xl">{page.status}</h1>
    <p class="text-xl">{page.error?.message}</p>
  </div>
  <a href="/" class="underline">Back to Home</a>
</div>
