<script lang="ts" setup>
const ogTitle = 'markdown飯';
const ogDescription =
  'markdown飯はレシピ日記です。作った料理のレシピと日記を掲載しています。';
const uri = 'https://md-meshi.com';
useHead({
  meta: [
    {
      property: 'og:site_name',
      content: ogTitle,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: uri },
    { property: 'og:title', content: ogTitle },
    {
      property: 'og:description',
      content: ogDescription,
    },
    {
      property: 'og:image',
      content: uri + '/md-meshi-ogp.png',
    },
    { name: 'twitter:card', content: 'summary' },
  ],
});
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-surface-primary px-4 font-noto text-text-primary md:px-8"
  >
    <div
      class="sticky top-0 z-50 -mx-4 grow-0 border-b border-border-secondary bg-gray-50/80 px-4 backdrop-blur-lg md:-mx-8 md:px-8"
    >
      <div class="mx-auto max-w-5xl">
        <TheHeader top-heading />
        <div class="px-1 pt-2 sm:pt-3">
          <RecipeNavigation />
        </div>
      </div>
    </div>

    <div
      class="z-10 mx-auto mt-8 flex w-full max-w-4xl grow flex-col md:mt-10 md:flex-row md:gap-8"
    >
      <div class="basis-9/12">
        <slot />
      </div>
      <div class="mt-16 basis-3/12 md:mt-5">
        <TheAside class="md:top-44" />
      </div>
    </div>

    <div class="-mx-4 mt-12 md:-mx-8 md:mt-14">
      <TheFooter class="grow-0" />
    </div>
  </div>
</template>
