<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { params } = useRoute();
const currentPage = computed(() => (params.slug ? Number(params.slug[0]) : 1));
const limit = 10;

const { data } = await useAsyncData(`list-page-${params.slug}`, () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .sort({ cookedDate: -1 })
    .skip(limit * (currentPage.value - 1))
    .limit(limit)
    .find();
});

const { data: allRecipeIds } = await useAsyncData('all-recipe', () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .only('id')
    .find();
});
const allRecipeLength = allRecipeIds.value.length;

const pager: number[] = [];
const pageLength = Math.floor(allRecipeLength);
for (let i = 0; i < pageLength; i += limit) {
  pager.push(i / limit);
}

useHead({
  title: 'markdown飯',
});
definePageMeta({
  layout: 'base',
  alias: ['/', '/recipe'],
});
</script>

<template>
  <main>
    <div>
      <BaseRecipeCard :data="data" class="" />
      <div class="mt-12">
        <BasePagination type="page" :pager="pager" :current="currentPage" />
      </div>
    </div>
  </main>
</template>
