import { defineNuxtPlugin } from '#app';
import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'markdown飯',
      pageTrackerScreenviewEnabled: true,
      config: { id: 'G-HS5CCBT4HN' },
    },
    router
  );
});
