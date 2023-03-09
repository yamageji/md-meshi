<script lang="ts" setup>
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

const layout = 'about';
</script>

<template>
  <div>
    <SeoMeat />
    <NuxtLayout :name="layout">
      <main class="grow py-8 leading-relaxed">
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
          <div class="grow rounded-md bg-surface-secondary py-5 px-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  src="/face-circle.png"
                  alt="ロゴ：koyama shigehito"
                  width="48"
                  height="48"
                  class="rounded-full"
                />
                <h3 class="text-lg font-bold tracking-wide">
                  koyama shigehito
                </h3>
              </div>

              <ul class="flex gap-3">
                <li
                  class="flex h-6 w-6 cursor-pointer items-center justify-center fill-current opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
                >
                  <NuxtLink to="https://github.com/K-shigehito">
                    <BaseIcon :width="22" :height="22" icon-name="github"
                      ><IconGithub
                    /></BaseIcon>
                  </NuxtLink>
                </li>

                <li
                  class="flex h-6 w-6 cursor-pointer items-center justify-center fill-current opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
                >
                  <NuxtLink to="https://twitter.com/chabatake5">
                    <BaseIcon :width="22" :height="22" icon-name="twitter"
                      ><IconTwitter
                    /></BaseIcon>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <p class="text-md mt-5 leading-loose">
              アマチュア Web
              developerです。本業は本作りをしています。現在は1歳児と猫2匹の父親として、家事育児に勤しんでいます。
            </p>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
