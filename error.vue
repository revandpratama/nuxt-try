<template>
    <div class="flex justify-center items-center h-screen">
        <div>
            <h2 class="text-xl text-center">Ooops....</h2>
            <p class="text-3xl text-center">{{ error.statusCode }}</p>
            <p class="text-center">{{ error.message }}</p>
            <div class="flex justify-center my-5">
                <NuxtLink to="/" class="btn2">Go Home..</NuxtLink>

            </div>
        </div>
    </div>
</template>

<script setup>

const { error } = defineProps(['error'])

onBeforeUnmount(() => {
    clearError();
    console.log('errorCleared');
})

</script>

<style scoped>

</style>