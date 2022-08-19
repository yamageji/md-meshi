<script setup lang="ts">
import DropDownMenu from './DropDownMenu.vue';
const route = useRoute();

const pageCategory = ref([
  { name: 'recipe', path: '/recipe' },
  { name: 'about', path: '/about' },
]);
// active-classのみで処理したいが上手くいかないので応急処置
const customActiveClass = (name: string) =>
  route.path.split('/')[1] === name
    ? 'text-accent-primary bg-surface-secondary text-accent-primary bg-surface-secondary'
    : '';
</script>

<template>
  <nav>
    <ul
      class="flex gap-1 rounded-full bg-surface-tertiary p-1 text-xs text-text-secondary sm:gap-2 sm:p-1.5 sm:text-sm"
    >
      <li
        v-for="(category, index) in pageCategory"
        :key="index"
        class="flex items-center"
      >
        <NuxtLink
          :to="category.path"
          active-class="text-accent-primary bg-surface-secondary"
          :class="customActiveClass(category.name)"
          class="rounded-full py-1 px-2 font-bold tracking-wide duration-150 hover:bg-surface-secondary sm:py-1.5 sm:px-3"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
    <DropDownMenu />
  </nav>
</template>
