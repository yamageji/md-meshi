<script setup lang="ts">
interface Props {
  topHeading?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  topHeading: false,
});

const htmlTag = computed(() => (props.topHeading ? 'h1' : 'div'));
</script>

<template>
  <header>
    <div class="flex h-[4.5rem] items-center gap-3 sm:h-20 sm:justify-between">
      <component :is="htmlTag" class="flex h-full items-center">
        <NuxtLink to="/" class="flex h-full items-center">
          <img
            width="192"
            height="40"
            src="/md-meshi-rogo.svg"
            alt="markdown飯"
            class="w-40 sm:w-48"
          />
        </NuxtLink>
      </component>

      <HeaderNavigation />
    </div>
  </header>
</template>
