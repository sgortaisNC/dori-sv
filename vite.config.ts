import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit(), SvelteKitPWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true
    },

    manifest: {
      name: 'svelte-dori',
      short_name: 'svelte-dori',
      description: 'svelte-dori',
      theme_color: '#ff0000'
    },

    workbox: {
      globPatterns: ['client/**/*.{js,css,ico,png,svg,webp}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  })]
})