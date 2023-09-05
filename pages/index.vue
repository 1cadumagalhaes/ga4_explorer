<template>
    <div class="container mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold mb-4">Welcome to GA4 explorer</h1>
        <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg shadow-lg p-4">
                <h2 class="text-xl font-bold mb-2">Dimensions</h2>
                <p class="text-lg mb-4">
                    Explore the dimensions available in Google Analytics 4 and
                    learn how to use them to gain insights into your website or
                    app.
                </p>
                <router-link
                    to="/dimensions"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Explore dimensions</router-link
                >
            </div>
            <div class="rounded-lg shadow-lg p-4">
                <h2 class="text-xl font-bold mb-2">Metrics</h2>
                <p class="text-lg mb-4">
                    Explore the metrics available in Google Analytics 4 and
                    learn how to use them to measure the performance of your
                    website or app.
                </p>
                <router-link
                    to="/metrics"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Explore metrics</router-link
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    },
});
</script>
