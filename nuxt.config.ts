const title = 'markdown飯';
const description =
  'markdown飯はレシピ日記です。作った料理のレシピと日記を掲載しています。コンテンツ管理に"Nuxt Content v2"を利用して、markdown書式で記事を書いています。';

export default {
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
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    // '@nuxtjs/robots',
  ],

  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      'Work Sans': [400, 500, 700],
    },
  },

  build: {
    transpile: ['@headlessui/vue', '@heroicons/vue'],
  },

  runtimeConfig: {
    public: {
      googleAnalytics: '',
    },
  },
};
