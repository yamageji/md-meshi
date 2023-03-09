// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
  ],
  content: {
    documentDriven: true,
  },
  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      'Work Sans': [400, 500, 700],
    },
  },
  headlessui: {
    prefix: 'Headless',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
});
