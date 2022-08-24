<script lang="ts" setup>
useHead({
  title: 'about | markdown飯',
});
definePageMeta({
  title: 'about',
  layout: 'about',
});

const aboutContents = [
  {
    title: '作る',
    description:
      'ごはんを作ります。あまり凝った料理はできませんが、家庭料理の精神で作っていきたいと思います。',
  },
  {
    title: '食べる',
    description: 'ごはんを食べます。できたら美味いもん食べたいです。',
  },
  {
    title: '書く',
    description:
      ' レシピを書きます。書くことで記憶に残したり、改善点などを発見して料理の上達に繋がれば良いなと思っています。日々の雑感を合わせて書いて、生活と紐づいた記録としていきたいと思っています。',
  },
];
</script>

<template>
  <main class="grow py-8 leading-relaxed">
    <div class="rounded-lg pb-8 sm:pb-8">
      <h2
        class="text-center text-2xl font-bold leading-loose tracking-wider text-text-secondary sm:text-4xl"
      >
        作る、食べる、書く。
      </h2>
      <div class="mt-6 flex flex-col items-center sm:mt-10">
        <img src="md-meshi-rogo_L.svg" alt="markdown飯" class="w-32 sm:w-48" />
      </div>
      <p
        class="mx-auto mt-6 max-w-[320px] leading-loose text-text-secondary sm:mt-8 sm:max-w-[358px] sm:text-lg sm:leading-loose"
      >
        markdown飯はレシピ日記です。<br />作った料理と日々の雑感を記録しています。
      </p>
    </div>

    <div class="mt-10 flex flex-col gap-8 sm:mt-12">
      <div
        v-for="aboutContent in aboutContents"
        :key="aboutContent.title"
        class="flex items-center gap-4 sm:gap-5"
      >
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-surface-tertiary font-bold text-text-secondary sm:h-24 sm:w-24 sm:text-lg"
        >
          {{ aboutContent.title }}
        </div>
        <p class="">
          {{ aboutContent.description }}
        </p>
      </div>
    </div>
  </main>
</template>
