<template>
    <div>
        <button @click="toggleSideBar" class="fixed right-11 top-20 p-2 bg-[#1f1f1f] border border-[#565656] rounded-2xl">
            <img :src="Button" alt="Menu" class="w-6 h-6 icon-gray" />
        </button>
    </div>
    <aside v-if="isSideBarVisible" class="fixed right-10 bottom-45 top-40 w-1/33 bg-[#1f1f1f] border border-[#565656] px-2 py-5 rounded-4xl mt-2 flex flex-col items-center">
        <ul class="w-full space-y-5">
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
            <li>
                <a href="#education" class="block text-center transition duration-300">
                    <img :src="Education" alt="Education" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
                <a href="#experience" class="block text-center transition duration-300">
                    <img :src="Experience" alt="Experience" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
                <a href="#services" class="block text-center transition duration-300">
                    <img :src="Services" alt="Services" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
                <a href="#skills" class="block text-center transition duration-300">
                    <img :src="Skills" alt="Skills" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
                <a href="#projects" class="block text-center transition duration-300">
                    <img :src="Projects" alt="Projects" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
            <li>
                <a href="#contact" class="block text-center transition duration-300">
                    <img :src="email" alt="email" class="w-6 h-6 icon-gray"/>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script setup>
    import Home from '../assets/icons/Home.svg'
    import Intro from '../assets/icons/Intro.svg'
    import email from '../assets/icons/email.svg'
    import Education from '../assets/icons/Education.svg'
    import Experience from '../assets/icons/Experience.svg'
    import Projects from '../assets/icons/Projects.svg'
    import Services from '../assets/icons/Services.svg'
    import Skills from '../assets/icons/Skills.svg'
    import Button from '../assets/icons/toggleMenu.svg'
import { ref } from 'vue'

    const isSideBarVisible = ref(true);
    const toggleIcon = ref(Button);

    const toggleSideBar = () => {
        isSideBarVisible.value = !isSideBarVisible.value;
    };
</script>