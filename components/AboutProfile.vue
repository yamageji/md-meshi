<template>
  <div class="grow rounded-md bg-surface-secondary py-6 px-8">
    <div class="flex items-center justify-between">
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

      <ul class="flex gap-4">
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
      developerです。本業では本作っています。現在は０歳児と猫２匹の父親として、家事育児に勤しんでいます。
    </p>
  </div>
</template>
