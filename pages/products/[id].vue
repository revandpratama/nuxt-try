<template>
    <div>
        <Head>
            <Title>Nuxt | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
    </div>
    <div class="p-10">
        <h2 class="text-xl text-center my-5">{{ product.title }}</h2>

        <div class="flex justify-center my-5">
            <img :src="product.image" alt="" class="h-96">
        </div>

        <div class="">
            <span class="border border-green-300 p-4 rounded-xl">$ {{ product.price }}</span>
            <p class="mt-10">{{ product.description }}</p>

        </div>


        <div class="my-10">
            <NuxtLink to="/products" class="btn2">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri)

if(!product.value){
    throw createError({statusCode: 404, message: 'Product not Found', fatal: true})
}
</script>

<style scoped>

</style>