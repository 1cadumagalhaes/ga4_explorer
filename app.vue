<script setup>
const menu_items = [
    {
        title: 'Home',
        icon: 'mdi:home',
        path: '/',
    },
    {
        title: 'Dimensions',
        icon: 'mdi:axis-arrow-info',
        path: '/dimensions',
    },
    {
        title: 'Metrics',
        icon: 'mdi:target',
        path: '/metrics',
    },
    {
        title: 'About',
        icon: 'mdi:information-slab-circle',
        path: '/about',
    },
];
</script>
<template>
    <div class="flex" id="app">
        <Sidebar :menu_items="menu_items" />
        <div class="overflow-x-auto h-screen mx-auto">
            <NuxtPage />
        </div>
    </div>
</template>
<style>
table a {
    color: #3182ce;
    text-decoration: underline;
}
</style>
