<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

const { data } = await useAsyncData('monthly-archive', () => {
  return queryContent<RecipeContent>('recipe')
    .where({ _partial: false })
    .sort({ cookedDate: -1 })
    .find();
});
const allDate = data.value?.map((value) => value.cookedDate);
// any後で直す
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGroupBy = (contents: any) => {
  // any後で直す
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return contents.reduce((group: any, x: any) => {
    const yearMonthString = x.slice(0, 7);
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
const groupedDate: string[] = useGroupBy(allDate);
</script>

<template>
  <h2
    class="text-md flex items-center gap-2 rounded-l-full bg-surface-tertiary py-2 pr-2 pl-3 font-bold tracking-wide before:inline-flex before:h-3 before:w-3 before:rounded-full before:bg-text-secondary"
  >
    月間アーカイブ
  </h2>

  <ul class="ml-2 mt-3 flex flex-col gap-1 pl-1">
    <li
      v-for="(month, index) in Object.keys(groupedDate)"
      :key="month"
      class="before:content-['・']"
    >
      <NuxtLink
        :to="`/recipe/monthly/${month}`"
        class="underline-offset-2 hover:underline"
      >
        {{ useFormatDate(month).convertedJapanese.value }}（{{
          Object.values(groupedDate)[index].length
        }}）
      </NuxtLink>
    </li>
  </ul>
</template>
