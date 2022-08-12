<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { data } = await useAsyncData('random-page', () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .only('_path')
    .find();
});

const showRandomRecipe = () => {
  const targetPath = Math.floor(Math.random() * data.value.length);
  return navigateTo({
    path: `${data.value[targetPath]._path}`,
  });
};

useHead({
  title: 'おまかせ一品 | markdown飯',
});
definePageMeta({
  title: 'おまかせ一品',
  layout: 'base',
});
</script>

<template>
  <main>
    <BaseHeadline>おまかせ一品</BaseHeadline>
    <p class="mt-8 text-center leading-7">
      ボタンを押すと、レシピが一品ランダムで表示されます。
    </p>
    <div class="my-8 flex items-center justify-center">
      <button
        type="button"
        class="rounded-full bg-accent-primary px-8 py-4 font-bold text-white shadow-sm duration-150 hover:bg-accent-secondary"
        @click="showRandomRecipe"
      >
        おまかせ！
      </button>
    </div>
  </main>
</template>
