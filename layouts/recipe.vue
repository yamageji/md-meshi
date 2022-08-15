<template>
  <div
    class="flex min-h-screen flex-col bg-surface-primary px-4 font-noto text-text-primary md:px-8"
  >
    <div
      class="sticky top-0 z-50 -mx-4 grow-0 border-b border-border-secondary bg-gray-50/80 px-4 backdrop-blur-lg md:-mx-8 md:px-8"
    >
      <TheHeader />
    </div>

    <div
      class="z-10 mx-auto mt-8 flex w-full max-w-4xl grow flex-col md:mt-12 md:flex-row md:gap-8"
    >
      <div class="basis-9/12">
        <slot />
      </div>
      <div class="mt-20 basis-3/12 md:mt-[88px]">
        <TheAside class="md:top-32" />
      </div>
    </div>

    <div class="-mx-4 mt-12 md:-mx-8 md:mt-20">
      <TheFooter class="grow-0" />
    </div>
  </div>
</template>
