<template>
  <div
    class="flex min-h-screen flex-col bg-surface-primary px-4 font-noto text-text-primary md:px-8"
  >
    <div
      class="sticky top-0 z-50 -mx-4 grow-0 border-b border-border-secondary bg-gray-50/80 px-4 backdrop-blur-lg md:-mx-8 md:px-8"
    >
      <div class="mx-auto max-w-5xl">
        <TheHeader />
      </div>
    </div>

    <div class="z-10 mx-auto mt-10 flex w-full max-w-md grow flex-col gap-8">
      <slot />
      <div class="flex flex-col gap-3">
        <h3 class="text-base font-bold">● 書いた人</h3>
        <AboutProfile />
      </div>
    </div>

    <div class="-mx-4 mt-12 grow-0 md:-mx-8 md:mt-20">
      <TheFooter />
    </div>
  </div>
</template>
