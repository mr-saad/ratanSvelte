<script>
  import Phone from "@lucide/svelte/icons/phone"
  import MapPin from "@lucide/svelte/icons/map-pin"
  import Mail from "@lucide/svelte/icons/mail"
  import ContactForm from "./ContactForm.svelte"
</script>

<svelte:head>
  <title>Contact Us | Ratan Bandhej</title>
  <meta
    name="description"
    content="Get in touch with Ratan Bandhej for inquiries, feedback or assistance. Contact us via email or phone for prompt support."
  />
  <meta name="keywords" content="Ratan Bandhej, Contact, Email, Phone, Support, Inquiries" />
</svelte:head>

<div class="content_container pt-23!">
  <section class=" rounded-md">
    <div class="grid md:grid-cols-2">
      <!-- Left Column: Contact Info  -->
      <div
        class="flex flex-col justify-between bg-rose-700 p-5 text-white md:p-10 dark:bg-white/10"
      >
        <strong class="mb-2 font-medium tracking-widest uppercase"> Get in touch </strong>
        <h2 class="font-serif text-3xl tracking-tighter text-white md:text-4xl">
          Let's craft something beautiful.
        </h2>
        <p class="my-5">
          Have a question about a custom order, shipping or wholesale inquiries? We are here to
          help.
        </p>

        <div class="space-y-8">
          <div class="flex items-start gap-5">
            <MapPin class="mt-1 shrink-0" size={20} />
            <div>
              <strong class="mb-1 font-bold text-white"> Visit our Home Store </strong>
              <p>
                1079, Apna Nagar - 1, Nr. Krishna Petrol Pump
                <br />
                Bhuj - Kachchh, Gujarat 370001
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5">
            <Mail class="mt-1 shrink-0" size={20} />
            <div>
              <strong class="mb-1 block font-bold text-white"> Email Us </strong>
              <a
                href="mailto:ratanbandhejbhuj@gmail.com"
                class="transition hover:text-white focus-visible:text-white"
              >
                ratanbandhejbhuj@gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-start gap-5">
            <Phone class="mt-1 shrink-0" size={20} />
            <div>
              <strong class="mb-1 block font-bold text-white"> Call Us </strong>
              <a href="tel:9228405162" class="transition hover:text-white focus-visible:text-white">
                +91 92284 05162
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 flex gap-5">
          <a
            aria-label="Ratan Bandhej Instagram Profile"
            target="_blank"
            href="https://instagram.com/ratanbandhejbhuj/"
            class="flex aspect-square items-center justify-center rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 focus-visible:bg-white/20"
          >
            <svg
              fill="#fff"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              id="Camada_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"
                />
                <path
                  d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"
                />
                <path
                  d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"
                />
              </g>
            </svg>
          </a>
          <a
            aria-label="Ratan Bandhej Facebook Page"
            target="_blank"
            href="https://www.facebook.com/people/Ratan-Bandhej/100071573145928"
            class="aspect-square rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 focus-visible:bg-white/20"
          >
            <svg
              fill="#fff"
              width="24"
              height="24"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column: The Form  -->
      <ContactForm />
    </div>
  </section>
</div>
