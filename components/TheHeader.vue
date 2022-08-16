<template>
  <header>
    <div class="flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
      <NuxtLink to="/">
        <h1 class="test text-2xl font-bold">
          <img src="/md-meshi-rogo.svg" alt="markdown飯" class="w-40 sm:w-48" />
        </h1>
      </NuxtLink>
      <div class="flex items-center gap-2 sm:gap-4">
        <HeaderNavigation />
        <NuxtLink
          class="flex items-center"
          to="https://github.com/K-shigehito/md-meshi"
        >
          <BaseIcon
            :width="28"
            :height="28"
            icon-name="GitHub"
            :icon-id="0"
            :icon-color="'currentColor'"
            class="w-6 text-text-secondary opacity-80 duration-150 hover:opacity-100 sm:w-7"
          >
            <IconGithub />
          </BaseIcon>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
