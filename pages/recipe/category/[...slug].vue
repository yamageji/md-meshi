<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';
import BaseHeadline from '@/components/BaseHeadline.vue';

const categories = {
  rice: 'ごはんもの',
  noodles: '麺類',
  soup: '汁もの',
  vegetable: '野菜のおかず',
  seafood: '魚介のおかず',
  meat: '肉のおかず',
  egg: '卵のおかず',
  others: 'その他',
};

const { params, path } = useRoute();
const targetCategory = computed(() => params.slug[0]);
const categoryText = computed(() => categories[targetCategory.value]);
const currentPage = computed(() => Number(params.slug[1]));
const limit = 10;

const { data } = await useAsyncData(`category-${params.slug}`, () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .where({ categories: { $contains: targetCategory.value } })
    .sort({ cookedDate: -1 })
    .skip(limit * (currentPage.value - 1))
    .limit(limit)
    .find();
});

const { data: categoryRecipeIds } = await useAsyncData(
  'category-recipe',
  () => {
    return queryContent<RecipeContent>('recipe')
      .where({ _partial: false })
      .where({ categories: { $contains: targetCategory.value } })
      .only('id')
      .find();
  }
);
const categoryRecipeLength = categoryRecipeIds.value!.length;

const pager: number[] = [];
const pageLength = Math.floor(categoryRecipeLength);
for (let i = 0; i < pageLength; i += limit) {
  pager.push(i / limit);
}

const layout = 'individual';
</script>

<template>
  <div>
    <SeoMeat
      :page-title="`${categoryText} - page${currentPage}`"
      :page-description="`${categoryText}レシピの一覧ページです。`"
      :page-path="path"
    />
    <NuxtLayout :name="layout">
      <main>
        <BaseHeadline>{{ categoryText }}</BaseHeadline>
        <BaseRecipeCard v-if="data?.length" :data="data" />
        <div
          v-else
          class="mt-4 flex h-28 items-center justify-center rounded-md border-2 border-dashed border-border-primary p-4 text-lg sm:h-36"
        >
          「{{ categoryText }}」のレシピがみつかりませんでした。
        </div>

        <div class="mt-12">
          <BasePagination
            :pager="pager"
            type="category"
            :current="currentPage"
            :category="targetCategory"
          />
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
