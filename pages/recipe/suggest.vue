<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { data } = await useAsyncData('suggest', () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .where({ evaluation: { $gte: 4 } })
    .sort({ cookedDate: -1 })
    .find();
});

useHead({
  title: 'おすすめ | markdown飯',
});
definePageMeta({
  title: 'おすすめ',
  layout: 'base',
});
</script>

<template>
  <main>
    <BaseRecipeCard :data="data" />
  </main>
</template>
