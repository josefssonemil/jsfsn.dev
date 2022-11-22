import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind(), image()],
});
