<script lang="ts" setup>
import { PageCategory } from './HeaderNavigation.vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import {
  ChevronDownIcon,
  CheckIcon,
  ExternalLinkIcon,
} from '@heroicons/vue/outline';

type Props = {
  categories: Array<PageCategory>;
};
const props = defineProps<Props>();

const { path } = useRoute();
const initialCategory = computed(() => {
  // ここの条件分岐を意味が分かるようにリファクタリングする
  if (path.split('/')[1] === props.categories[0].name) {
    return props.categories[0];
  } else if (path.split('/')[1] === props.categories[1].name) {
    return props.categories[1];
  } else {
    return props.categories[0];
  }
});

const selectedCategory = ref(initialCategory);
</script>

<template>
  <div class="flex items-center gap-3">
    <span
      v-if="selectedCategory.name"
      class="text-sm text-text-secondary sm:hidden"
      >/</span
    >

    <Listbox v-slot="{ open }" v-model="selectedCategory">
      <div class="relative">
        <ListboxButton
          class="group relative w-full cursor-pointer py-2 pr-7 font-bold"
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
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 rounded-md border border-border-secondary bg-surface-secondary p-2 shadow-lg"
            as="nav"
          >
            <ListboxOption
              v-for="category in props.categories"
              v-slot="{ active, selected }"
              :key="category.name"
              :value="category"
              as="template"
            >
              <a :href="category.path">
                <div
                  :class="[
                    active ? 'bg-surface-primary' : '',
                    'relative cursor-pointer select-none rounded-md py-2 pl-9 pr-4 ',
                  ]"
                >
                  <span
                    :class="[selected ? 'font-bold' : 'font-normal', 'block']"
                    >{{ category.name }}</span
                  >
                  <span
                    v-show="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <CheckIcon class="h-5 w-5 pt-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </ListboxOption>

            <a
              class="flex items-center"
              href="https://github.com/K-shigehito/md-meshi"
            >
              <div
                class="relative cursor-pointer select-none rounded-md py-2 pl-9 pr-9 hover:bg-surface-primary"
              >
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ExternalLinkIcon class="h-5 w-5 pt-0.5" aria-hidden="true" />
                </span>
                <span> GitHub </span>
              </div>
            </a>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
