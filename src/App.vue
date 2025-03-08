<template>
  <Header />
  <div class="w-full h-screen bg-[#1b1f24] text-white flex flex-col">
    <div class="flex flex-col md:flex-row items-center justify-between pt-16">
      <div class="w-full md:w-2/5">
        <img
          src="../src//assets/images/profile2.jpg"
          alt="Profile Image"
          class="w-full max-h-full object-contain"
        />
      </div>

      <div class="w-full md:w-3/5 text-left md:pl-12">
        <h2 class="text-5xl font-bold text-gray-400">
          My <span class="text-white">Portfolio</span>
        </h2>
        <p class="py-10 mr-24">
          A highly motivated and detail-oriented Frontend Web Developer with a
          passion for creating responsive, user-friendly websites and
          applications. Proficient in HTML, CSS, JavaScript, and modern frontend
          frameworks like React and Vue.js. Adept at transforming design
          concepts into seamless, interactive user experiences. Strong
          problem-solving skills with a deep understanding of web performance,
          accessibility, and cross-browser compatibility. Dedicated to
          continuous learning and staying updated with industry trends to
          deliver cutting-edge web solutions.
        </p>
        <a
          href="https://www.linkedin.com/in/adnan-sameer-z-8a0473303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="flex items-center justif-center gap-2 bg-white text-lg text-[#1b1f24] px-4 py-2 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md"
          >
            Connect
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-blue-600"
              fill="modernBlack"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>
