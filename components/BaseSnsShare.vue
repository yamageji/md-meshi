<script setup lang="ts">
type Props = {
  text: string;
};

const props = defineProps<Props>();

const { path } = useRoute();
const formatPath = computed(() => path.replace(/\/$/, ''));

const url = `https://md-meshi.com${formatPath.value}/`;
// 各記事のタイトルを取得
const textAndHashTag = encodeURIComponent(`${props.text} #mdmeshi`);
const twitterURL = computed(
  () => `https://twitter.com/intent/tweet?url=${url}&text=${textAndHashTag}`
);
</script>

<template>
  <div>
    <div class="flex justify-center">
      <a :href="twitterURL" target="_blank" rel="noopener">
        <div
          class="inline-flex items-center justify-center gap-2 rounded-full bg-surface-quaternary px-4 py-2 tracking-wider text-white opacity-80 duration-150 hover:opacity-100"
        >
          <BaseIcon
            :width="20"
            :height="20"
            :icon-name="'twitter'"
            :icon-id="2"
          >
            <IconTwitter />
          </BaseIcon>
          <span class="">tweetする</span>
        </div>
      </a>
    </div>
  </div>
</template>
