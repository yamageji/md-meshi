<template>
  <header>
    <div class="flex h-[4.5rem] items-center gap-3 sm:h-20 sm:justify-between">
      <NuxtLink to="/">
        <h1 class="test text-2xl font-bold">
          <div class="w-40 sm:w-48">
            <img
              width="192"
              height="40"
              src="/md-meshi-rogo.svg"
              alt="markdown飯"
            />
          </div>
        </h1>
      </NuxtLink>
      <HeaderNavigation />
    </div>
  </header>
</template>
