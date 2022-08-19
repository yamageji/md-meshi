<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

type Props = {
  categories: Array<{ name: string; path: string }>;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton
        class="inline-flex w-full items-center justify-center gap-2 py-2 text-sm font-bold text-text-primary hover:bg-opacity-30"
      >
        Options
        <BaseIcon icon-name="right-arrow" :width="16" :height="16">
          <iconRightArrow />
        </BaseIcon>
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-border-secondary rounded-md border border-border-secondary bg-surface-tertiary shadow-lg"
        >
          <div class="px-1 py-1">
            <MenuItem v-for="category in props.categories" v-slot="{ active }">
              <NuxtLink
                :to="category.path"
                :class="[
                  active ? 'bg-surface-quaternary text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                {{ category.name }}
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-surface-quaternary text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                GitHub
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
