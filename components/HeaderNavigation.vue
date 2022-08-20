<script setup lang="ts">
export type PageCategory = {
  name: string;
  path: string;
};

const route = useRoute();

const pageCategory: Array<PageCategory> = [
  { name: 'recipe', path: '/recipe' },
  { name: 'about', path: '/about' },
];

// active-classのみで処理したいが上手くいかないので応急処置
const customActiveClass = (name: string) =>
  route.path.split('/')[1] === name
    ? 'text-accent-primary bg-surface-secondary text-accent-primary bg-surface-secondary'
    : '';
</script>

<template>
  <div>
    <nav class="hidden gap-4 sm:flex">
      <ul
        class="flex gap-2 rounded-full bg-surface-tertiary p-1.5 text-sm text-text-secondary"
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
            class="rounded-full py-1.5 px-3 font-bold tracking-wide duration-150 hover:bg-surface-secondary"
          >
            {{ category.name }}
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink
        class="flex items-center"
        to="https://github.com/K-shigehito/md-meshi"
      >
        <BaseIcon
          :width="28"
          :height="28"
          icon-name="GitHub"
          :icon-id="0"
          :icon-color="'currentColor'"
          class="w-7 text-text-secondary opacity-80 duration-150 hover:opacity-100"
        >
          <IconGithub />
        </BaseIcon>
      </NuxtLink>
    </nav>

    <BaseListBox class="sm:hidden" :categories="pageCategory" />
  </div>
</template>
