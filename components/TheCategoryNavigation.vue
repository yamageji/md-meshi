<script setup lang="ts">
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
</script>

<template>
  <h2
    class="text-md flex items-center gap-2 rounded-l-full bg-surface-tertiary py-2 pr-2 pl-3 font-bold tracking-wide before:inline-flex before:h-3 before:w-3 before:rounded-full before:bg-text-secondary"
  >
    カテゴリー
  </h2>
  <ul class="mt-3 ml-2 flex flex-col gap-1 pl-1">
    <li
      v-for="(category, index) in Object.keys(categories)"
      :key="category"
      class="before:content-['・']"
    >
      <NuxtLink
        :to="`/recipe/category/${category}/1`"
        class="underline-offset-2 duration-150 hover:underline"
      >
        {{ Object.values(categories)[index] }}
      </NuxtLink>
    </li>
  </ul>
</template>
