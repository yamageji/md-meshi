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
    <OgpImage ogp-title="test" image="/recipe/2022-06-19" />
    <div class="rounded-lg pb-8 sm:pb-8">
      <h1
        class="ml-[0.85rem] text-center text-[1.7rem] font-bold leading-loose tracking-wider text-text-secondary sm:ml-4 sm:text-4xl"
      >
        作る、食べる、書く。
      </h1>
      <div
        class="mx-auto mt-6 flex w-36 flex-col items-center sm:mt-10 sm:w-48"
      >
        <img
          width="192"
          height="150"
          src="/md-meshi-rogo_L.svg"
          alt="ロゴ：markdown飯"
        />
      </div>
      <p
        class="mx-auto mt-6 ml-2 text-center font-bold leading-loose text-text-secondary sm:mt-8 sm:text-lg sm:leading-loose"
      >
        markdown飯はレシピ日記です。<br />作った料理と日々の雑感を記録しています。
      </p>
    </div>

    <div class="mt-12 flex flex-col gap-6 sm:mt-14">
      <div
        v-for="aboutContent in aboutContents"
        :key="aboutContent.title"
        class="flex gap-4 rounded-md border-2 border-border-tertiary p-4 sm:gap-5"
      >
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-surface-tertiary font-bold text-text-secondary sm:h-24 sm:w-24 sm:text-lg"
        >
          {{ aboutContent.title }}
        </div>
        <p class="self-center">
          {{ aboutContent.description }}
        </p>
      </div>
    </div>

    <div class="mt-20 flex flex-col gap-3">
      <h3
        class="mb-1 flex items-center gap-1.5 text-lg font-bold tracking-wider text-text-secondary before:mt-[1.5px] before:inline-block before:h-3 before:w-5 before:rounded-full before:bg-gray-600"
      >
        作っている人
      </h3>
      <AboutProfile />
    </div>
  </main>
</template>
