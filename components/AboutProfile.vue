<template>
  <div class="grow basis-5/12 rounded-md bg-surface-secondary p-4">
    <div class="flex items-center gap-3">
      <img
        src="~/assets/images/shigehito_logo_100.svg"
        alt="personal rogo"
        width="48"
        height="48"
        class="rounded-full"
      />
      <h3 class="text-lg font-bold tracking-wide">koyama shigehito</h3>
    </div>
    <p class="text-md mt-4 leading-relaxed">
      アマチュア Web developer
      です。料理も特段得意という訳ではありません。graphic design
      がチョット出来ます。
    </p>

    <ul class="mt-6 flex gap-3">
      <li
        class="flex h-6 w-6 cursor-pointer items-center justify-center fill-current opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
      >
        <a
          :href="'https://github.com/K-shigehito'"
          target="_blank"
          rel="noopener"
        >
          <BaseIcon :width="22" :height="22" :icon-name="'github'"
            ><IconGithub
          /></BaseIcon>
        </a>
      </li>

      <li
        class="flex h-6 w-6 cursor-pointer items-center justify-center fill-current opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
      >
        <a
          :href="'https://twitter.com/chabatake5'"
          target="_blank"
          rel="noopener"
        >
          <BaseIcon :width="22" :height="22" :icon-name="'twitter'"
            ><IconTwitter
          /></BaseIcon>
        </a>
      </li>
    </ul>
  </div>
</template>
