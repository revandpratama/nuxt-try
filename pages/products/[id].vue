<template>
    <div>
        <h2 class="text-xl my-5">{{ product.title }}</h2>
        <p>{{ product.description }}</p>

        <div class="my-10">
            <NuxtLink to="/products" class="btn">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id;

const { data:product } = await useFetch(uri)
</script>

<style scoped>

</style>