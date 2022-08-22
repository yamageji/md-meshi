import { defineNuxtPlugin } from '#app';
const config = useRuntimeConfig();
import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'markdown飯',
      pageTrackerScreenviewEnabled: true,
      config: { id: config.googleAnalyticsId },
    },
    router
  );
});
