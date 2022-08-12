<script setup lang="ts">
type Props = {
  // any後で直す
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  direction: 'prev' | 'next';
};
const props = defineProps<Props>();

const directionClass = computed(() => {
  if (props.direction === 'prev') {
    return 'justify-self-start';
  } else if (props.direction === 'next') {
    return 'justify-self-end';
  }
});
const directionLinkClass = computed(() => {
  if (props.direction === 'prev') {
    return '';
  } else if (props.direction === 'next') {
    return 'flex-row-reverse';
  }
});
const directionBorderClass = computed(() => {
  if (props.direction === 'prev') {
    return 'border-r pr-2';
  } else if (props.direction === 'next') {
    return 'border-l pl-2';
  }
});
</script>

<template>
  <div
    :class="directionClass"
    class="group items-stretch rounded-md border border-border-tertiary text-sm duration-150 hover:border-accent-primary"
  >
    <NuxtLink v-if="data" :to="data._path">
      <div :class="directionLinkClass" class="flex h-full gap-2 px-2 py-2">
        <div
          :class="directionBorderClass"
          class="-my-1 flex items-center border-border-tertiary duration-150 group-hover:border-accent-primary"
        >
          <BaseIcon
            :icon-name="'left arrow'"
            :width="18"
            :height="18"
            class="duration-150 group-hover:text-accent-primary"
          >
            <IconLeftArrow v-if="props.direction === 'prev'" />
            <IconRightArrow v-else-if="props.direction === 'next'" />
          </BaseIcon>
        </div>
        <p
          class="flex items-center duration-150 group-hover:text-accent-primary"
        >
          {{ data.title }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
