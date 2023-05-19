<template>
  <div class="h-screen">
    <div>
      <header class="shadow-md bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">Nuxt Try</NuxtLink>
        </nav>
      </header>
    </div>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="sticky top-[100vh] bg-white w-full">
      <hr />
      <ul class="flex gap-4 p-5">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
