import { defineNuxtPlugin } from '#app';
import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'markdown飯',
      pageTrackerScreenviewEnabled: true,
      config: { id: process.env.GOOGLE_ANALYTICS_ID },
    },
    router
  );
});
