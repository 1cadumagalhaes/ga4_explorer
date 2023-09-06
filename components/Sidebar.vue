<template>
    <div
        class="sidebar h-screen lg:left-0 p-2 w-[300px] text-center bg-gray-900 flex flex-col justify-stretch"
    >
        <!--top-->
        <div class="text-gray-100 text-xl flex-initial">
            <div class="p-2.5 mt-1 flex flex-col items-center">
                <img
                    src="https://storage.cloud.google.com/dp6-public/logo-ga4.png"
                    alt="Google Analytics 4"
                />
                <h1 class="font-bold text-gray-200 text-[15px] ml-3">
                    GA4 Explorer
                </h1>
                <div class="flex">
                    <UButton
                        :icon="
                            isDark
                                ? 'i-heroicons-moon-20-solid'
                                : 'i-heroicons-sun-20-solid'
                        "
                        color="gray"
                        variant="ghost"
                        aria-label="Theme"
                        @click="isDark = !isDark"
                    />
                </div>
            </div>

            <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <!--center-->
        <div class="flex flex-col flex-1">
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                v-for="item in menu_items"
            >
                <a :href="item.path">
                    <Icon :name="item.icon" />
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">
                        {{ item.title }}
                    </span>
                </a>
            </div>
        </div>
        <!--bottom-->
        <div class="flex flex-col items-center flex-initial">
            <a href="https://dp6.github.io">
                <img
                    src="https://storage.cloud.google.com/dp6-public/logo-dp6.png"
                    alt="Logo DP6"
                    style="height: 32px"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu_items: {
            type: Array,
            default: [
                {
                    title: 'Home',
                    icon: 'ic:baseline-house',
                },
            ],
        },
    },
};
</script>
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
