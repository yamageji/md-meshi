<template>
  <div class="con-span-10 list-decimal md:col-span-6">
    <h2
      class="before:mt-.5 flex items-center gap-1.5 text-xl tracking-wider before:inline-block before:h-3 before:w-5 before:rounded-full before:bg-accent-primary"
    >
      作り方
    </h2>
    <div class="procedure mt-6">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.procedure {
  ol {
    counter-reset: item;
    @apply flex flex-col gap-5;

    li {
      counter-increment: item;
      @apply pl-12 -indent-12 leading-7;

      &::before {
        content: counter(item);
        @apply mr-3 inline items-center justify-center rounded-full border border-border-primary bg-surface-secondary px-[12.5px] py-[5.3px] font-normal;
      }
    }
  }
  strong {
    @apply mx-0.5;
  }
}
</style>
