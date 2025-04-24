<template>
    <div class="min-h-screen bg-[#1f1f1f] text-white flex">
        <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
            <LeftComponent />
        </div>

        <main class="flex-1 px-4 md:px-8 lg:px-16 flex items-center">
            <section class="w-full max-w-4xl mx-auto">
                <div class="flex flex-col">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed">
                        Hello, I am
                    <span class="text-[#28E98C]">Adnan Sameer Z</span>
                    <br class="hidden sm:block">
                        Fullstack Web Developer
                </h1>
                    <p class="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl">
                        I design and code beautifully simple things and I love what I do. Just simple like that!
                    </p>
                </div>
            </section>
        </main>

        <div class="w-24 md:w-32 lg:w-48 flex-shrink-0">
            <RightComponent />
        </div>
    </div>
</template>

<script setup>
    import LeftComponent from '../components/LeftComponent.vue';
    import RightComponent from '../components/RightComponent.vue';
</script>