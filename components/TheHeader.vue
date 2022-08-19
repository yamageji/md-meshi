<template>
  <header>
    <div class="flex h-[4.5rem] items-center gap-4 sm:h-20 sm:justify-between">
      <NuxtLink to="/">
        <h1 class="test text-2xl font-bold">
          <img
            src="/md-meshi-rogo_draft.svg"
            alt="markdown飯"
            class="w-40 sm:w-48"
          />
        </h1>
      </NuxtLink>
      <span class="sm:hidden">/</span>
      <HeaderNavigation />
    </div>
  </header>
</template>
