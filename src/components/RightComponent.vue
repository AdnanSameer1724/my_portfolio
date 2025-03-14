<template>
    <aside class="fixed right-10 bottom-50 top-50 w-1/33 bg-[#1f1f1f] border border-[#565656] px-2 py-5 rounded-4xl mt-2 flex flex-col items-center">
        <ul class="w-full space-y-4">
            <li>
                <a href="#about" class="block text-center transition duration-300">
                    <img :src="Home" alt="Home" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
            <a href="#projects" class="block text-center transition duration-300">
                <img :src="Intro" alt="Intro" class="w-6 h-6 icon-gray"/>
            </a>
            </li>
        </ul>
    </aside>
</template>

<script setup>
    import Home from '../assets/icons/Home.svg'
    import Intro from '../assets/icons/Intro.svg'
</script>