<script lang="ts" setup>
useHead({
  title: 'about | markdown飯',
});
definePageMeta({
  title: 'about',
  layout: 'about',
});
</script>

<template>
  <main class="grow basis-7/12 py-8">
    <div class="flex flex-col items-center justify-center gap-20">
      <img
        src="/md-meshi-rogo_draft.svg"
        alt="markdown飯"
        class="w-80 sm:w-80"
      />
    </div>
    <p class="mt-16 leading-relaxed text-text-secondary">
      markdown飯はレシピ日記です。
    </p>
    <div class="mt-10 flex flex-col gap-8">
      <div class="flex gap-4">
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-surface-tertiary"
        >
          cook
        </div>
        <p class="leading-relaxed text-text-secondary">
          ごはんを作ります。あまり凝った料理はできませんが、家庭料理の精神で作っていきます。
        </p>
      </div>
      <div class="flex gap-4">
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-surface-tertiary"
        >
          eat
        </div>
        <p class="leading-relaxed text-text-secondary">
          ごはんを食べます。できたら美味いもん食べたいです。
        </p>
      </div>
      <div class="flex gap-4">
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-surface-tertiary"
        >
          write
        </div>
        <p class="leading-relaxed text-text-secondary">
          レシピを書きます。書くことで記憶に残したり、改善点などを発見して料理の上達に繋がれば良いなと思っています。全く関係のない日記も数行書いて、生活と紐づいた記録としていきたいと思っています。
        </p>
      </div>
    </div>
  </main>
</template>
