<script setup lang="ts">
import { RecipeContent } from '@/types/recipe-content';

type Props = {
  data: RecipeContent[];
};
defineProps<Props>();

const cloudinary = 'https://res.cloudinary.com/dxqzhe7v1/image/upload';
</script>

<template>
  <ul class="mt-3 flex flex-col gap-4 sm:gap-5 md:mt-4">
    <li
      v-for="content in data"
      :key="content._id"
      class="rounded-md bg-white duration-150 hover:bg-white"
    >
      <NuxtLink :to="content._path">
        <div class="rounded-md p-2">
          <div class="flex gap-3 sm:gap-4">
            <figure class="min-h-full w-24 shrink-0 sm:w-32">
              <img
                height="128"
                width="128"
                :src="`${cloudinary}/c_scale,w_128/ogp/${content.cookedDate}.jpg`"
                :alt="`写真：${content.title}`"
                :srcset="`${cloudinary}/c_scale,w_256/ogp/${content.cookedDate}.jpg 256w, ${cloudinary}/c_scale,w_198/ogp/${content.cookedDate}.jpg 198w, ${cloudinary}/c_scale,w_128/ogp/${content.cookedDate}.jpg 128w, ${cloudinary}/c_scale,w_96/ogp/${content.cookedDate}.jpg 96w`"
                size="(max-width: 539px) 96px"
                loading="lazy"
                decoding="async"
                class="rounded-md object-cover drop-shadow"
              />
            </figure>

            <div class="flex flex-col gap-3 py-1 pr-1 sm:gap-4 sm:pr-2">
              <div class="flex items-center gap-2 sm:gap-3">
                <BaseDateBadge :date="content.cookedDate" />
                <h2 class="text-md leading-snug sm:text-xl">
                  {{ content.title }}
                </h2>
              </div>

              <ul class="flex flex-wrap gap-1 sm:gap-2">
                <li
                  v-for="category in content.ingredients"
                  :key="category"
                  class="flex w-fit items-center gap-0.5 rounded-full border border-border-primary px-1.5 py-0.5 text-2xs before:inline-flex before:h-2 before:w-2 before:rounded-full before:bg-accent-primary sm:gap-1 sm:px-2 sm:text-xs"
                >
                  {{ category }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
