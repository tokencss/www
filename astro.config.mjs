import { defineConfig } from 'astro/config';
import tokencss from "@tokencss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://tokencss.com",
  integrations: [tokencss()]
});
