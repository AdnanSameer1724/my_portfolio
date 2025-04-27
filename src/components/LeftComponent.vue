<template>
  <aside
    class="fixed left-7 bottom-20 top-10 w-1/5 bg-[#1f1f1f] border border-[#565656] rounded-2xl p-5 font-sans"
  >
    <h1 class="text-2xl text-white font-bold mb-[5px]">Adnan</h1>
    <h1 class="text-2xl text-white font-bold mb-[30px]">Sameer Z</h1>

    <img 
        src="../assets/images/me.jpeg"
        alt="me"
        class="w-[250px] h-[250px] object-cover rounded-2xl mb-[40px]"
    />

    <h2 class="text-lg text-white font-semibold leading-tight mb-[12px]">
      Fullsz tack Web Developer .
    </h2>

    <div class="flex items-center text-[#999999] text-sm mb-[30px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c-4.42 0-8 3.58-8 8 0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
      </svg>
      <span>Bengaluru, KA, India</span>
    </div>

    <ul class="flex flex-row space-x-6 mb-[30px]">
      <li>
        <a href="https://www.linkedin.com/in/adnan-sameer-z-8a0473303/" target="_blank" class="flex items-center justify-center w-10 h-10 border-[#999999] rounded-full">
          <svg class="w-6 h-6 hover:w-8 hover:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75zm12.5 11.25h-3v-5.5c0-1.32-.03-3-1.84-3s-2.13 1.43-2.13 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.61 2 3.61 4.61v5.57z"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.github.com/adnansameer1724" target="_blank" class="flex items-center justify-center w-10 h-10 border-[#999999] rounded-full">
          <svg class="w-6 h-6 hover:w-8 hover:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.49.997.108-.774.42-1.304.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.522.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.404c1.02.004 2.047.138 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.654.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.626-5.475 5.92.43.37.82 1.1.82 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.215.695.825.575 4.76-1.585 8.2-6.08 8.2-11.38 0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://leetcode.com/u/AdnanSameer24/" target="_blank" class="flex items-center justify-center w-10 h-10 border-[#999999] rounded-full">
          <img :src="leetcode" alt="leetcode" class="w-6 h-6 hover:w-8 hover:h-8 filter invert"/>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" class="flex items-center justify-center w-10 h-10 border-[#999999] rounded-full">
          <img :src="freelancer" alt="leetcode" class="w-6 h-6 hover:w-8 hover:h-8 filter invert"/>
        </a>
      </li>
    </ul>

    <a
      href="mailto:adnansameer1724@gmail.com"
      class="flex items-center justify-center w-full py-4 text-lg text-[#000000] hover:text-[#28E98C] bg-[#28E98C] hover:bg-[#000000] transition duration-300 rounded-4xl"
    >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      class="mr-2"
      fill="currentColor"
    >
      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 2L12 10.6 5.4 6h13.2zM4 18V7.4l8 5.6 8-5.6V18H4z"/>
    </svg>
      Hire Me
  </a>
  </aside>
</template>

<script setup>
  import leetcode from '../assets/icons/leetcode.svg'
  import freelancer from '../assets/icons/freelancer.svg'
  import email from '../assets/icons/email.svg'
</script>
