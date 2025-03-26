<template>
    <div class="flex flex-col min-h-screen bg-[#1f1f1f] text-white">

        <!-- Introduction section -->
         <section class="flex flex-col justify-center items-center h-screen w-full ml-96 mr-96">
            <div class="flex flex-col">
                <h1 class="text-5xl font-bold text-white leading-relaxed">
                    Hi, I am
                    <span class="text-[#28E98C]">Adnan Sameer Z</span>
                    Fullstack Web Developer
                    <br/>
                </h1>
                <p class="text-gray-400 text-lg mt-4 max-w-2xl">
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
            </div>
         </section>
        <!-- Left component -->
         <LeftComponent />
         <RightComponent />
    </div>
</template>

<script setup>
    import LeftComponent from '../components/LeftComponent.vue';
    import RightComponent from '../components/RightComponent.vue';
</script>