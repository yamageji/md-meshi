import { defineNuxtConfig } from 'nuxt';

const title = 'markdown飯';
const description =
  'markdown飯はレシピ日記です。作った料理のレシピと日記を掲載しています。コンテンツ管理に"Nuxt Content v2"を利用して、markdown書式で記事を書いています。';
const uri = 'https://md-meshi.com';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:site_name',
          content: title,
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: uri },
        { property: 'og:title', content: title },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: uri + '/images/2022-08-07.webp',
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
  // Disallow: '',
  // },

  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      'Work Sans': [400, 500, 700],
    },
  },
});
