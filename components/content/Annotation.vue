<script setup lang="ts">
type Props = {
  type: 'memo' | 'point';
};

const props = withDefaults(defineProps<Props>(), {
  type: 'memo',
});

const borderColorClass = (type: string) => {
  switch (type) {
    case 'memo':
      return 'border-y border-accent-primary';
    case 'point':
      return 'border-y border-accent-secondary';
    default:
      return 'border-y border-primary';
  }
};
</script>

<template>
  <div :class="[type]">
    <h2 class="inline-flex items-center justify-center gap-1 text-lg">
      {{ props.type }}
    </h2>

    <div
      :class="borderColorClass(props.type)"
      class="annotation px-2 py-4 leading-7"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.annotation {
  ul {
    @apply flex flex-col gap-2;
  }
  ul > li {
    @apply pl-5 -indent-5 before:mr-1  before:content-['・'];
  }
  a {
    @apply text-text-accent-primary underline underline-offset-2;
  }
}
.memo {
  h2 {
    @apply text-text-accent-primary;
  }
}
.point {
  h2 {
    @apply text-accent-secondary;
  }
}
</style>
