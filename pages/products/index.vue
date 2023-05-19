<template>
  <div class="mb-10">
    <h2 class="text-2xl">Products</h2>
    <hr />
  </div>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products" class="p-2 mb-5 shadow border border-slate-400 hover:shadow-xl">
      <NuxtLink :to="`/products/${p.id}`" class="">
        <h3 class="text-center h-1/4 align-middle">{{ p.title }}</h3>
        <div class="flex max-h-52 overflow-hidden h-3/4 w-100 justify-center">
          <img :src="p.image" alt="" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products?limit=7");
</script>

<style scoped></style>
