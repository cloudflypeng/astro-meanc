// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
// import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  site: 'https://astro.130011.xyz',
  integrations: [
    UnoCSS({
      injectReset: false, // or a path to the reset file
      // presets: [
      //   presetIcons()
      // ]
    }),
  ]
})