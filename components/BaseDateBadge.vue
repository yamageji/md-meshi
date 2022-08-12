<script setup lang="ts">
type Props = {
  date: string;
};
const props = defineProps<Props>();

const { day, convertedMonth } = useFormatDate(props.date);
</script>

<template>
  <div
    class="-ml-1 flex h-10 w-10 shrink-0 flex-col items-center rounded-md bg-surface-tertiary py-1 text-center font-w-sans font-medium sm:h-12 sm:w-12 sm:py-1.5"
  >
    <div class="text-2xs tracking-wider sm:text-xs">
      {{ convertedMonth }}
    </div>
    <div class="text-md -mt-1 sm:text-xl">
      {{ day }}
    </div>
  </div>
</template>
