<template>
  <div>
    <header class="shadow-md bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Try</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/aboutadasd">errorTest</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Product</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>


