import { defineNuxtPlugin } from '#app';
import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'markdown飯',
      pageTrackerScreenviewEnabled: true,
      config: { id: config.public.googleAnalytics },
    },
    router
  );
});
