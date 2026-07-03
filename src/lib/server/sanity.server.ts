import { createClient } from "@sanity/client"
import { PROJECT_ID, DATASET, API_VERSION, SANITY_TOKEN } from "$env/static/private"

const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token: SANITY_TOKEN,
  useCdn: false
})
export default sanity
