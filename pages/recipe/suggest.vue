<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { path } = useRoute();

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
});
</script>

<template>
  <div>
    <SeoMeat
      page-title="おすすめ"
      page-description="おすすめレシピの一覧ページです。"
      :page-path="path"
    />
    <NuxtLayout>
      <main>
        <BaseRecipeCard :data="data!" />
      </main>
    </NuxtLayout>
  </div>
</template>
