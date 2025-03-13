<template>
    <div class="flex min-h-screen bg-[#1f1f1f] text-white">
        <!-- Left component -->
         <LeftComponent />
         <RightComponent />
    </div>
</template>

<script setup>
    import LeftComponent from '../components/LeftComponent.vue';
    import RightComponent from '../components/RightComponent.vue';
</script>