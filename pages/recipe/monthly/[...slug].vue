<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

import BaseHeadline from '@/components/BaseHeadline.vue';

const { params, path } = useRoute();

const targetMonth = computed(() => params.slug[0]);

const { convertedJapanese } = useFormatDate(targetMonth.value);

const { data } = await useAsyncData(`monthly-${params.slug}`, () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .where({ cookedDate: { $contains: targetMonth.value } })
    .sort({ cookedDate: -1 })
    .find();
});

const layout = 'individual';
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <SeoMeat
      :page-title="`${convertedJapanese}`"
      :page-description="`${convertedJapanese}のレシピの一覧ページです。`"
      :page-path="path"
    />
    <NuxtLayout :name="layout">
      <main>
        <BaseHeadline>{{ convertedJapanese }}</BaseHeadline>
        <BaseRecipeCard :data="data!" />
      </main>
    </NuxtLayout>
  </div>
</template>
