<script lang="ts" setup>
import { PageCategory } from './HeaderNavigation.vue';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import {
  ChevronDownIcon,
  CheckIcon,
  ExternalLinkIcon,
} from '@heroicons/vue/solid';

type Props = {
  pageCategories: Array<PageCategory>;
  outerLink: Array<PageCategory>;
};
const props = defineProps<Props>();

const linkCategories = computed(() => [
  ...props.pageCategories,
  ...props.outerLink,
]);

const { path } = useRoute();
const selectedCategory = computed(() => {
  // ここの条件分岐を意味が分かるようにリファクタリングする
  if (path.split('/')[1] === props.pageCategories[0].name) {
    return props.pageCategories[0];
  } else if (path.split('/')[1] === props.pageCategories[1].name) {
    return props.pageCategories[1];
  } else {
    return props.pageCategories[0];
  }
});
</script>

<template>
  <div class="flex items-center gap-3 text-text-secondary">
    <span v-if="selectedCategory" class="text-sm text-text-secondary sm:hidden"
      >/</span
    >
    <Menu v-slot="{ open }" as="div">
      <div class="relative">
        <MenuButton
          class="group w-full cursor-pointer py-2 pr-7 text-[0.9375rem] font-bold"
        >
          <span class="block">{{ selectedCategory.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
          >
            <ChevronDownIcon
              v-show="selectedCategory.name && !open"
              class="h-5 w-5 pt-0.5 text-text-tertiary group-hover:text-text-primary"
              aria-hidden="true"
            />
            <ChevronDownIcon
              v-show="selectedCategory.name && open"
              class="h-5 w-5 rotate-180 pb-0.5 group-hover:text-text-primary"
              aria-hidden="true"
            />
          </span>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute mt-1 rounded-md border border-border-secondary bg-surface-secondary p-2 shadow-lg"
          as="nav"
        >
          <MenuItem
            v-for="category in linkCategories"
            v-slot="{ active }"
            :key="category.name"
            :value="category"
            as="template"
            class="flex flex-col gap-2"
          >
            <NuxtLink
              :to="category.path"
              :class="[
                active ? 'bg-surface-primary' : '',
                'relative flex w-full cursor-pointer select-none rounded-md py-2 px-4',
              ]"
            >
              <span class="absolute inset-y-0 left-2 mr-3 flex items-center">
                <CheckIcon
                  v-show="selectedCategory.name === category.name"
                  class="h-5 w-5 pt-0.5"
                  aria-hidden="true"
                />
              </span>
              <span
                class="ml-5 mr-4"
                :class="
                  selectedCategory.name === category.name ? 'font-bold' : ''
                "
              >
                {{ category.name }}
              </span>
              <span class="absolute inset-y-0 right-2 flex items-center">
                <ExternalLinkIcon
                  v-show="!category.isInternal"
                  class="h-5 w-5 text-text-secondary"
                  aria-hidden="true"
                />
              </span>
            </NuxtLink>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
