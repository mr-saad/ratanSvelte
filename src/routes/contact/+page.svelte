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
      <div class="flex flex-col justify-between bg-rose-700 p-5 text-white md:p-10">
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
<!-- <h1 class="heading">Contact Us</h1>
  <p>
    Thank you for your interest in Ratan Bandhej. We are delighted to assist you with any inquiries,
    feedback, or assistance you may require. Here are the details to get in touch with us:
  </p>
  <p>
    E-Mail:{" "}
    <a
      href="mailto:ratanbandhej@gmail.com"
      class="highlight mb-3 border-b border-current font-semibold"
    >
      ratanbandhejbhuj@gmail.com
    </a>
  </p>
  <p class="mb-4">
    Phone:{" "}
    <a href="tel:+919228405162" class="highlight border-b border-current font-semibold">
      +91 9228405162
    </a>
  </p>
  <p class="mb-4">
    We value your feedback and strive to provide prompt responses to all your queries. Whether you
    have questions about our Bandhani products, need assistance with an order, or simply want to
    share your thoughts, we are here to help.
  </p>
  <p class="mb-4">
    You can reach us via email at{" "}
    <a
      title="E-Mail"
      href="mailto:ratanbandhej@gmail.com"
      class="highlight border-b border-current font-semibold"
    >
      ratanbandhejbhuj@gmail.com
    </a>
    . Please allow up to 24 hours for us to respond to your email, although we endeavor to reply as soon
    as possible.
  </p>
  <p class="mb-4">
    If you prefer to speak with us directly, you can contact us by phone at{" "}
    <a
      title="Phone"
      href="tel:+919228405162"
      class="highlight border-b border-current font-semibold"
    >
      +91 9228405162
    </a>
    . Our customer support team is available during business hours to assist you with your queries and
    provide any necessary guidance.
  </p>
  <p>
    Thank you for choosing Ratan Bandhej. We look forward to hearing from you and providing you with
    an exceptional shopping experience.
  </p>
  <div class="my-10 flex flex-wrap items-center gap-5">
    <a
      title="Whatsapp"
      href="https://wa.me/919228405162?text=Hi%20There!"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#3fbd4f"
        height="60"
        width="60"
        viewBox="0 0 308 308"
      >
        <g>
          <path
            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
          />
          <path
            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
          />
        </g>
      </svg>
    </a>
    <a
      title="Facebook"
      href="https://www.facebook.com/people/Ratan-Bandhej/100071573145928"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="#1773ea"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>
    <a
      title="Instagram"
      href="https://instagram.com/ratanbandhejbhuj/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="orange"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </a>
  </div> -->
