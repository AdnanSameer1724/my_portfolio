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
  <div class="flex w-full max-w-7xl mx-auto">
    <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
      <LeftComponent />
    </div>
    <main class="flex-1 flex items-center justify-center">
      <section class="w-full max-w-4xl">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          My <span class="text-[#28E98C]">Education</span>
        </h1>
        
        <!-- Timeline Container -->
        <div class="relative pl-8 sm:pl-12">
          <!-- Vertical Line (Thinner and Gray) -->
          <div class="absolute left-1 top-0 h-full w-px bg-[#999999]"></div>
          
          <!-- Timeline Items -->
          <div 
            v-for="(item, index) in educationItems" 
            :key="index" 
            class="relative mb-10"
          >
            <!-- Circle Marker (Gray) -->
            <div class="absolute -left-12 sm:-left-12 top-1 h-3 w-3 rounded-full bg-[#999999]"></div>
            <!-- Content -->
            <div class="px-6 pb-7 rounded-lg">
              <h3 class="text-xl font-semibold text-[#28E98C]">{{ item.degree }}</h3>
              <p class="text-gray-400">{{ item.institution }}</p>
              <p class="text-gray-400">{{ item.years }} | {{ item.grade }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="w-24 md:w-32 lg:w-48 flex-shrink-0">
      <RightComponent />
    </div>
  </div>
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
    import { ref, onMounted } from 'vue';
    import LeftComponent from '../components/LeftComponent.vue';
    import RightComponent from '../components/RightComponent.vue';

    const educationItems = [
        {
            degree: "Bachelor's in Computer Science",
            institution: "ABC University",
            years: "2020 - 2024",
            grade: "GPA: 8.5/10"
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "XYZ College",
            years: "2018 - 2020",
            grade: "Grade: 92%"
        },
        {
            degree: "Secondary School (10th)",
            institution: "PQR School",
            years: "2018",
            grade: "Grade: 95%"
        }
    ];

    const activeIndex = ref(0); // Tracks which circle is green

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          activeIndex.value = index;
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of item is visible
  );

  // Observe all timeline items
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.setAttribute('data-index', index);
    observer.observe(item);
  });
});
</script>