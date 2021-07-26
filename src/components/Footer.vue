<template>
  <footer class="justify-center mt-32 bg-blue-950 border-t-8 border-blue-900 text-white">
    <a class="flex w-full justify-center relative -top-12 md:-top-24" aria-label="business logo" href="/index.html">
      <img aria-hidden="true" src="../assets/logo-icon.png" alt="" class="w-16 md:w-36">
    </a>
    <div class="w-full text-center">
          <a class="block md:inline-block md:mr-3" href="tel:555-555-1123">555.555.1123</a>
          <span class="block md:inline-block">Somewehere, Out There</span>
          <a class="block" href="example@email.com">example@email.com</a>
    </div>
    <div class="w-full text-center text-sm sm:text-base lg:text-xl sm:flex-grow my-2 md:my-6">
      <router-link 
        class="no-underline block sm:inline-block text-teal-lighter md:mr-6"
        v-for="link in menuLinks"
        :key="link.href"
        :to="link.href"
        >{{ link.text }}</router-link>
    </div>
    <div class="block w-full text-center text-sm pb-4">
          Designed and Developed by <a href="https://www.bajintech.com/"> Bajin Tech Design</a>
          <span class="block copy">Copyright 2021</span>
    </div>
    <!-- <div class="circle-container">
        <div aria-hidden="true" class="circle circle1"></div>
        <div aria-hidden="true" class="circle circle2"></div>
    </div> -->
  </footer> 
</template>

<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    menuLinks: { 
      type: Object,
      default: [
        {
          text: "Home",
          href: "/"
        },
        {
          text: "About",
          href: "/about"
        },
        {
          text: "Services",
          href: "/services"
        },
        {
          text: "Portfolio",
          href: "/portfolio"
        },
        {
          text: "Testimonials",
          href: "/testimonials"
        },
        {
          text: "Contact",
          href: "/"
        },
    ]
    }
  })

  const { menuLinks } = toRefs(props)

</script>

<style>

</style>