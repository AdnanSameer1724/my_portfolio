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
              <div class="flex w-full max-w-7xl mx-auto">
                <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
                  <LeftComponent />
                </div>
                <main class="flex-1 flex items-center justify-center">
                  <section class="w-full max-w-4xl">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
                      My <span class="text-[#28E98C]">Experience</span>
                    </h1>
                    
                    <!-- Timeline Container -->
                    <div class="relative pl-8 sm:pl-12">
                      <!-- Vertical Line (Thinner and Gray) -->
                      <div class="absolute left-1 top-0 h-full w-px bg-[#999999]"></div>
                      
                      <!-- Timeline Items -->
                      <div 
                        v-for="(item, index) in experienceItems" 
                        :key="index" 
                        class="relative mb-10"
                      >
                        <!-- Circle Marker (Gray) -->
                        <div class="absolute -left-12 sm:-left-12 top-1 h-3 w-3 rounded-full bg-[#999999]"></div>
                        <!-- Content -->
                        <div class="px-6 pb-7 rounded-lg">
                          <h3 class="text-xl font-semibold text-[#28E98C]">{{ item.companyName }}</h3>
                          <p class="text-gray-400">{{ item.jobRole }}</p>
                          <p class="text-gray-400">{{ item.timeLine }}</p>
                          <p class="text-gray-400"> {{ item.location }} </p>
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

            <section id="services" class="h-screen w-full snap-start flex justify-center items-center bg-[#1f1f1f]">
              <div class="flex w-full max-w-7xl mx-auto">
                <div class="w-24 mr-24 md:w-32 lg:w-48 flex-shrink-0">
                  <LeftComponent />
                </div>
                <main class="flex-1 flex items-center justify-center">
                  <section class="w-full max-w-4xl">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
                      My <span class="text-[#28E98C]">Specializations</span>
                    </h1>

                    <div class="space-y-6">
                      <div
                        v-for="(service, index) in services"
                        :key="index"
                        class="flex justify-between items-center border border-gray-700 rounded-xl p-6 hover:border-[#28E98C] transition"
                      >
                        <div>
                          <h3 class="text-xl font-semibold mb-2 text-white">{{ service.title }}</h3>
                          <p class="text-sm text-gray-400 mb-1">{{ service.description }}</p>
                          <span class="text-xs text-gray-500 uppercase">{{ service.projects }} Projects</span>
                        </div>
                        <div v-html="service.icon" class="text-[#28E98C] text-xl"></div>
                      </div>
                    </div>
                  </section>
                </main>
                <div class="w-24 md:w-32 lg:w-48 flex-shrink-0">
                  <RightComponent />
                </div>
              </div>
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
            degree: "Bachelor of rechnology",
            institution: "Channabasaveshwara Institute of technology",
            years: "2019 - 2023",
            grade: "GPA: 8.2/10"
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "Ravindra Bharthi PU College",
            years: "2017 - 2019",
            grade: "Grade: 81%"
        },
        {
            degree: "Secondary School (10th)",
            institution: "J.K. Memorial Central School",
            years: "2017",
            grade: "CGPA: 9.4"
        }
    ];

    const experienceItems = [
      {
        companyName: "Grocliq",
        jobRole: "Fullstack Engineer",
        timeLine: "April 2025 - Present",
        location: "Bengaluru, KA"
      },
      {
        companyName: "Livekeeping Inc.",
        jobRole: "Frontend Developer",
        timeLine: "November 2024 - April 2025",
        location: "Noida, UP"
      },
      {
        companyName: "Livekeeping Inc.",
        jobRole: "Frontend Developer(INTERN)",
        timeLine: "August 2024 - November 2024",
        location: "Noida, UP"
      }
    ]

    const services = [
      {
        title: "Website Design",
        description: "I created digital products with unique ideas using HTML & Tailwind CSS",
        projects: 3,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>`
      },
      {
        title: "Development",
        description: "I build websites with MERN/MEAN stack",
        projects: 7,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`
      },
      {
        title: "SEO",
        description: "Increase the traffic for your website with SEO optimization",
        projects: 1,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h2l1 2 2-6 1 5h2l1-3 2 4 1-2h2"/></svg>`
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