// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: false // or a path to the reset file
    }),
  ]
})