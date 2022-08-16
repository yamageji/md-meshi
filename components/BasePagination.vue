<script setup lang="ts">
type Props = {
  pager: number[];
  current: number;
  type: 'page' | 'category' | 'monthly';
  category?: string;
  monthly?: string;
};

const props = withDefaults(defineProps<Props>(), {
  current: 0,
  category: '',
  monthly: '',
});

const pageType = computed(() => {
  switch (props.type) {
    case 'page':
      return 'page';
    case 'category':
      return `category/${props.category}`;
    case 'monthly':
      return `monthly/${props.monthly}`;
  }
});

const getPath = (p: number) => {
  return `/recipe/${pageType.value}/${p}`;
};

const activeClass = (p: number) =>
  props.current === p + 1
    ? 'text-white bg-accent-primary'
    : 'text-text-tertiary hover:text-accent-primary';
</script>

<template>
  <ul class="flex items-center justify-center gap-2 text-sm sm:text-base">
    <li v-if="current > 1">
      <nuxt-link
        :to="getPath(current - 1)"
        class="flex h-8 w-8 items-center justify-center rounded-full hover:text-accent-primary sm:h-10 sm:w-10"
      >
        <BaseIcon icon-name="left-arrow" :width="18" :height="18">
          <iconLeftArrow />
        </BaseIcon>
      </nuxt-link>
    </li>
    <li
      v-if="3 < current"
      class="flex h-8 w-8 items-center justify-center rounded-full text-text-tertiary sm:h-10 sm:w-10"
    >
      <nuxt-link :to="getPath(1)"> 1 </nuxt-link>
    </li>
    <li v-if="4 < current" class="omission">...</li>
    <li
      v-for="p in pager"
      v-show="current - 3 <= p && p <= current + 1"
      :key="p"
    >
      <nuxt-link
        :to="getPath(p + 1)"
        :class="activeClass(p)"
        class="flex h-8 w-8 items-center justify-center rounded-full duration-150 sm:h-10 sm:w-10"
      >
        {{ p + 1 }}
      </nuxt-link>
    </li>
    <li v-if="current + 3 < pager.length" class="omission">...</li>
    <li
      v-if="current + 2 < pager.length"
      class="flex h-8 w-8 items-center justify-center rounded-full text-text-tertiary sm:h-10 sm:w-10"
    >
      <nuxt-link :to="getPath(pager.length)">
        {{ pager.length }}
      </nuxt-link>
    </li>
    <li v-if="current < pager.length">
      <nuxt-link
        :to="getPath(current + 1)"
        class="flex h-8 w-8 items-center justify-center rounded-full hover:text-accent-primary sm:h-10 sm:w-10"
      >
        <BaseIcon icon-name="right-arrow" :width="18" :height="18">
          <iconRightArrow />
        </BaseIcon>
      </nuxt-link>
    </li>
  </ul>
</template>
