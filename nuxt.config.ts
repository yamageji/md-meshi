import { defineNuxtConfig } from 'nuxt';

const title = 'markdown 飯';
const description =
  'markdown飯はレシピ日記です。作った料理のレシピと日記を掲載しています。コンテンツ管理に"Nuxt Content v2"を利用して、markdown書式で記事を書いています。';
const uri = 'https://md-meshi.com';

export default defineNuxtConfig({
  target: 'static',
  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: title,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: uri },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: uri + '/images/2022-06-19.webp',
        },
        { name: 'twitter:card', content: 'summary' },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    // '@nuxtjs/robots',
  ],
  // robots: {
  //   UserAgent: '*',
  //   // Disallow: '',
  // },

  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      'Work Sans': [400, 500, 700],
    },
  },
});
