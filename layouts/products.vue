<template>
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

    <footer>
        <hr />
        <div class="shadow-inner">
            <ul class="flex gap-4 p-5">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </div>
    </footer>
  </template>
  
  <style scoped>
  .router-link-exact-active {
    color: aqua;
  }
  </style>
  
  
  