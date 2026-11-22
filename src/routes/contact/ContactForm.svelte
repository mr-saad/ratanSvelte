<script lang="ts">
  import { Button } from "$lib/components/ui/button"

  const handleFormSubmit = async (e: Event) => {
    e.preventDefault()
  }
</script>

<form onsubmit={handleFormSubmit} class="grid gap-10 py-5 md:px-5 md:py-0">
  <div class="grid gap-10 md:grid-cols-2">
    <div class="group">
      <label for="fname" class="mb-2 block font-bold tracking-wider uppercase"> First Name </label>
      <input required name="fname" id="fname" type="text" class="input" placeholder="Saad" />
    </div>
    <div class="group">
      <label for="lname" class="mb-2 block font-bold tracking-wider uppercase"> Last Name </label>
      <input required id="lname" name="lname" type="text" class="input" placeholder="Khatri" />
    </div>
  </div>

  <div class="group">
    <label for="email" class="mb-2 block font-bold tracking-wider uppercase"> Email Address </label>
    <input
      required
      id="email"
      name="email"
      type="email"
      class="input"
      placeholder="saadkhatri@gmail.com"
    />
  </div>

  <div class="group">
    <label for="subject" class="mb-2 block font-bold tracking-wider uppercase"> Subject </label>
    <select required id="subject" name="subject" class="select w-full">
      <option>General Inquiry</option>
      <option>Order Status</option>
      <option>Wholesale</option>
      <option>Returns</option>
    </select>
  </div>

  <div class="group">
    <label for="message" class="mb-2 block font-bold tracking-wider uppercase"> Message </label>
    <textarea
      required
      id="message"
      name="message"
      rows="4"
      class="input resize-none"
      placeholder="Write your message here..."
    ></textarea>
  </div>
  <Button type="submit" class={"justify-self-start"}>Send Message</Button>
</form>
