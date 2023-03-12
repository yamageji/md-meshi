<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { path } = useRoute();

const { data } = await useAsyncData('suggest', () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .where({ evaluation: { $gte: 5 } })
    .sort({ cookedDate: -1 })
    .find();
});

const layout = 'default';
definePageMeta({
  documentDriven: false,
  layout: false,
});
</script>

<template>
  <div>
    <SeoMeat
      page-title="おすすめ"
      page-description="おすすめレシピの一覧ページです。"
      :page-path="path"
    />
    <NuxtLayout :name="layout">
      <main>
        <BaseRecipeCard :data="data!" />
      </main>
    </NuxtLayout>
  </div>
</template>
