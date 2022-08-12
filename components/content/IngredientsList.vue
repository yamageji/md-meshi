<script setup lang="ts">
type Props = {
  numberOfPeople: string | number;
};
const props = withDefaults(defineProps<Props>(), {
  numberOfPeople: '2',
});
</script>

<template>
  <div>
    <h2
      class="before:mt-.5 flex items-center gap-1.5 text-xl tracking-wider before:inline-block before:h-3 before:w-5 before:rounded-full before:bg-accent-primary"
    >
      材料<span class="text-base font-normal"
        >（{{ props.numberOfPeople }}人前）</span
      >
    </h2>
    <div
      class="ingredients mt-4 rounded-md border border-border-primary bg-surface-secondary px-6 py-4 text-base leading-7"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.ingredients {
  ul > li {
    @apply flex items-center gap-3;

    > ul {
      @apply my-2 border-l-2 border-accent-primary pl-2 before:hidden;
    }
  }
}
</style>
