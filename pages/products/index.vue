<template>
    <div class="mb-10">
        <h2 class="text-2xl">Products</h2>
        <hr />
    </div>

    <div class="grid grid-cols-4 gap-4">
        <div v-for="p in products" class="shadow-md">
            <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            <div class="w-52 max-h-52 overflow-hidden">
                <img :src="p.image" alt="">
            </div>
        </div>
    </div>
</template>




<script setup>
definePageMeta({
    layout: 'products'
})

const url = 'https://fakestoreapi.com/products';

const { data: products } = await useFetch(url)
</script>

<style scoped>

</style>