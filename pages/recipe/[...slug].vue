<script setup lang="ts">
import BaseSnsShare from '~~/components/BaseSnsShare.vue';
const { path } = useRoute();
const { params } = useRoute();

const formatPath = computed(() => path.replace(/\/$/, ''));

const { data } = await useAsyncData(`recipe-${params.slug[0]}`, () => {
  return queryContent()
    .where({ _partial: false })
    .where({ cookedDate: params.slug[0] })
    .findOne();
});

const { data: surroundData } = await useAsyncData(
  `surround-${params.slug[0]}`,
  () => {
    return queryContent('recipe')
      .where({ _partial: false })
      .findSurround(formatPath.value);
  }
);

const [prev, next] = surroundData.value;

const pageTitle = computed(() => data.value.title);
const uri = 'https://md-meshi.com';

const ogUrl = computed(() => `${uri}${formatPath.value}`);
const cloudinary = 'https://res.cloudinary.com/dxqzhe7v1/image/upload';
const ogImage = computed(
  () =>
    `${cloudinary}/l_ogp:${params.slug[0]}/c_scale,h_500,w_500/r_29/fl_layer_apply,g_north_west,x_65,y_64/co_rgb:44403C,c_fit,h_258,w_494,l_text:ogp:NotoSansJP-Medium.otf_64_normal_left:${pageTitle.value}/fl_layer_apply,g_north_west,x_608,y_180/co_rgb:44403C,l_text:ogp:NotoSansJP-Bold.otf_32_normal_left:${params.slug[0]}/fl_layer_apply,g_north_west,x_630,y_101/ogp/base.jpg`
);

useHead({
  title: `${pageTitle.value} | markdown飯`,
  meta: [
    {
      name: 'description',
      content: `markdown飯：${pageTitle.value}のレシピです。`,
    },
    {
      property: 'og:title',
      content: `${pageTitle.value} | markdown飯`,
    },
    {
      property: 'og:description',
      content: `${pageTitle.value}のレシピです。`,
    },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:url',
      content: ogUrl.value,
    },
    {
      property: 'og:image',
      content: ogImage.value,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});
definePageMeta({
  layout: 'recipe',
});
</script>

<template>
  <main>
    <h1
      class="flex flex-col gap-3 pb-2 text-2xl tracking-wide text-text-secondary after:h-[2px] after:w-20 after:rounded-md after:bg-text-tertiary sm:gap-4 sm:text-3xl sm:after:w-24"
    >
      {{ data.title }}
    </h1>

    <div class="mt-4 flex flex-col items-start gap-6 sm:mt-6 sm:flex-row">
      <div class="col-start-1 row-start-1 w-full sm:w-64 sm:shrink-0">
        <img
          width="490"
          height="490"
          :src="`${cloudinary}/c_scale,w_490/ogp/${data.cookedDate}.jpg`"
          :alt="`写真：${data.title}`"
          :srcset="`${cloudinary}/c_scale,w_980/ogp/${data.cookedDate}.jpg 980w, ${cloudinary}/c_scale,w_512/ogp/${data.cookedDate}.jpg 512w, ${cloudinary}/c_scale,w_490/ogp/${data.cookedDate}.jpg 490w, ${cloudinary}/c_scale,w_256/ogp/${data.cookedDate}.jpg 256w`"
          size="(max-width: 539px) 490px, 256px"
          decoding="async"
          class="rounded-md object-cover shadow-md shadow-shadow-primary"
        />
      </div>

      <div class="grow">
        <div class="text-sm">
          <p class="flex items-center">
            <BaseIcon
              icon-name="calendar"
              :height="15"
              :width="15"
              class="mr-1"
            >
              <IconCalendar />
            </BaseIcon>
            作った日：<span class="mt-0.5 font-w-sans">{{
              data.cookedDate
            }}</span>
          </p>
          <p class="mt-1 flex items-center">
            <BaseIcon icon-name="timer" :height="15" :width="15" class="mr-1">
              <IconTimer />
            </BaseIcon>
            調理時間：<span class="mt-0.5 font-w-sans"
              >{{ data.cookingTime }}
            </span>
            分
          </p>
        </div>

        <ul class="mt-3 flex flex-wrap gap-2">
          <li
            v-for="category in data.ingredients"
            :key="category"
            class="flex w-fit items-center gap-1 rounded-full border border-border-primary px-2 py-0.5 text-xs before:inline-flex before:h-2 before:w-2 before:rounded-full before:bg-accent-primary"
          >
            {{ category }}
          </li>
        </ul>

        <p
          class="mt-3 flex flex-col gap-2 pt-4 leading-7 before:block before:h-[1px] before:w-12 before:bg-text-tertiary"
        >
          {{ data.diary }}
        </p>
      </div>
    </div>

    <div class="mt-14">
      <ContentRenderer
        :key="data._id"
        :value="data"
        class="flex flex-col gap-12 md:gap-14"
      />
    </div>

    <BaseSnsShare :text="data.title" class="mt-14" />

    <div class="mt-14 grid grid-cols-2 gap-4">
      <RecipePrevNextLink
        v-if="prev"
        :data="prev"
        direction="prev"
        class="col-start-1"
      />
      <RecipePrevNextLink
        v-if="next"
        :data="next"
        direction="next"
        class="col-start-2"
      />
    </div>
  </main>
</template>
