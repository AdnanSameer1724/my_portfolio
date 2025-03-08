<template>
    <header class="bg-[#9CA3AF] text-[#1b1f24] w-full fixed top-0 left-0 z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <!-- Logo -->
        <h1 class="text-2xl font-bold">MyPortfolio</h1>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="hover:text-gray-400">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-gray-400">About</RouterLink>
          <RouterLink to="/projects" class="hover:text-gray-400">Projects</RouterLink>
          <RouterLink to="/contact" class="hover:text-gray-400">Contact</RouterLink>
        </nav>
  
        <button @click="toggleMenu" class="md:hidden focus:outline-none">
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
  
      <nav v-if="isOpen" class="md:hidden bg-[#d1d5db]">
        <RouterLink to="/" class="block py-2 px-6 hover:bg-gray-800">Home</RouterLink>
        <RouterLink to="/about" class="block py-2 px-6 hover:bg-gray-800">About</RouterLink>
        <RouterLink to="/projects" class="block py-2 px-6 hover:bg-gray-800">Projects</RouterLink>
        <RouterLink to="/contact" class="block py-2 px-6 hover:bg-gray-800">Contact</RouterLink>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isOpen = ref(false);
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  