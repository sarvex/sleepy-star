import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), mdx(), partytown(), tailwind()]
});