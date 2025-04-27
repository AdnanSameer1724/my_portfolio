<template>
    <div class="bg-[#1f1f1f] text-white">
        <div class="snap-y snap-mandatory h-screen w-full overflow-y-auto" ref="container">
            <section id="about" class="h-screen w-full snap-start flex justify-center items-center">
                <div class="flex w-full max-w-7xl mx-auto">
                    <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
                        <LeftComponent />
                    </div>

                    <main class="flex-1 flex items-center justify-center">
                        <section class="w-full max-w-4xl">
                            <div class="flex flex-col">
                                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed">
                                    Hello, I am
                                <span class="text-[#28E98C]">Adnan Sameer Z</span>
                                <br class="hidden sm:block">
                                    Fullstack Web Developer
                                </h1>
                                <br>
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
            </section>

            <section id="intro" class="h-screen w-full snap-start flex justify-center items-center">
                <div class="flex w-full max-w-7xl mx-auto">
                    <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
                        <LeftComponent />
                    </div>
                    <main class="flex-1 flex items-center justify-center">
                        <section class="w-full max-w-4xl">
                            <div class="flex flex-col">
                                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed">
                                    Every great design begin with an even
                                    <span class="text-[#28E98C]">better story.</span>
                                </h1>
                                <br>
                                <p class="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl">
                                    "I'm a passionate Fullstack Developer with one year of hands-on experience building dynamic and responsive web applications. I enjoy working across the entire development stack, from crafting intuitive front-end interfaces to building robust back-end systems. I'm always eager to learn new technologies, solve complex problems, and create meaningful digital experiences. Currently, I'm focused on expanding my skills, collaborating on exciting projects, and continuously growing as a developer."
                                </p>
                            </div>
                        </section>
                    </main>
                    <div class="w-24 md:w-32 lg:w-48 flex-shrink-0">
                        <RightComponent />
                    </div>
                </div>
            </section>

            <section id="education" class="h-screen w-full snap-start flex justify-center items-center bg-[#1f1f1f]">
            </section>

            <section id="experience" class="h-screen w-full snap-start flex justify-center items-center bg-[#1a1a1a]">
            </section>

            <section id="services" class="h-screen w-full snap-start flex justify-center items-center bg-[#1f1f1f]">
            </section>

            <section id="skills" class="h-screen w-full snap-start flex justify-center items-center bg-[#1a1a1a]">
            </section>

            <section id="projects" class="h-screen w-full snap-start flex justify-center items-center bg-[#1f1f1f]">
            </section>

            <section id="contact" class="h-screen w-full snap-start flex justify-center items-center bg-[#1a1a1a]">
            </section>
        </div>
    </div>
</template>

<script setup>
    import LeftComponent from '../components/LeftComponent.vue';
    import RightComponent from '../components/RightComponent.vue';
</script>