<script setup lang="ts">
interface Props {
  topHeading?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  topHeading: false,
});
</script>

<template>
  <header>
    <div class="flex h-[4.5rem] items-center gap-3 sm:h-20 sm:justify-between">
      <h1 v-if="props.topHeading" class="flex h-full items-center">
        <NuxtLink to="/" class="flex h-full items-center">
          <div class="w-40 sm:w-48">
            <img
              width="192"
              height="40"
              src="/md-meshi-rogo.svg"
              alt="markdown飯"
            />
          </div>
        </NuxtLink>
      </h1>
      <div v-else class="flex h-full items-center">
        <NuxtLink to="/" class="flex h-full items-center">
          <div class="w-40 sm:w-48">
            <img
              width="192"
              height="40"
              src="/md-meshi-rogo.svg"
              alt="markdown飯"
            />
          </div>
        </NuxtLink>
      </div>
      <HeaderNavigation />
    </div>
  </header>
</template>
