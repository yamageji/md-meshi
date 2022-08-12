<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

import BaseHeadline from '~~/components/BaseHeadline.vue';

const { params } = useRoute();
const targetMonth = computed(() => params.slug[0]);

const { convertedJapanese } = useFormatDate(targetMonth.value);

const { data } = await useAsyncData(`monthly-${params.slug}`, () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .where({ cookedDate: { $contains: targetMonth.value } })
    .sort({ cookedDate: -1 })
    .find();
});

useHead({
  title: `${convertedJapanese.value} | markdown飯`,
});

definePageMeta({
  layout: 'individual',
});
</script>

<template>
  <main>
    <BaseHeadline>{{ convertedJapanese }}</BaseHeadline>
    <BaseRecipeCard :data="data" />
  </main>
</template>
