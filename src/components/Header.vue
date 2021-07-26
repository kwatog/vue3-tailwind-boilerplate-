<template>
   <header class="border-b-4 border-blue-800">
    <!-- ============================================ -->
    <!--                   NAVIGATION                 -->
    <!-- ============================================ -->

    <nav class="flex items-center justify-between flex-wrap bg-teal my-4 md:my-10 px-4">
      <div class="block sm:hidden">
        <button class="flex items-center px-3 py-2 rounded text-white">
          <!-- <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> -->
        </button>
      </div>
      <div class="flex items-center justify-center md:justify-start flex-grow md:mr-12">
        <img aria-hidden="true" 
            src="../assets/logo.png" 
              alt="company logo"
              class="w-32 md:w-44 lg:w-52">
      </div>
      <div class="block sm:hidden">
        <button @click.prevent="toggleMenu()" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="state.menuOpen ? 'block': 'hidden'" class="w-full sm:flex sm:items-center sm:w-auto">
          <div class="nav-menu text-sm sm:text-base lg:text-xl sm:flex-grow">
            <router-link 
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter md:mr-6 md:py-4"
              v-for="link in menuLinks"
              :key="link.href"
              :to="link.href"
              >
              {{ link.text }}
            </router-link>
          </div>
      </div>
    </nav>
    </header>  
</template>

<script setup>
  import { reactive, toRefs } from "vue";

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
          href: "/contact"
        },
    ]
    }
  });

  const { menuLinks } = toRefs(props);

  const state = reactive({
    menuOpen: false
  })

  function toggleMenu() { 
    state.menuOpen = !state.menuOpen
  }
  
</script>

<style scoped>
.nav-menu {
    font-family: Raleway;
}
.nav-menu a:hover:before {
    cursor: pointer;
    -webkit-transition: .2s ease;
    -o-transition: .2s ease;
    transition: .2s ease;
    content: '';
    background: var(--primary);
    height: 4px;
    width: 100%;
    position: absolute;
    bottom: -4px;
    left: 0;
}

</style>