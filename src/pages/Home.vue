<template>
  <div>
    <!-- header navigation component -->
    <header-nav/>
    <main id="main">
    
        <!-- ============================================ -->
        <!--                    LANDING                   -->
        <!-- ============================================ -->
    
        <!-- <section id="herox">
            <div aria-hidden="true" id="dark"></div>
            <div class="z-10">
                <div class="text-white m-6 md:m-24 md:mx-36 text-center lg:text-left lg:w-1/2">
                    <h1 class="font-bold text-3xl md:text-5xl">Professional House Painters For Your Home or Business</h1>
                    <h2 class="text-base leading-none md:text-xl my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero, quae recusandae repellendus sed sequi tenetur animi quidem eum cupiditate.</h2>
                    <div class="m-auto justify-center lg:justify-start">
                      <a class="justify-center m-auto md:m-px block md:inline-flex w-56 md:w-56 bg-blue-800 hover:bg-blue-500 text-white py-2 md:py-4 px-4 rounded-md leading-5 md:mr-3 mb-3" href="#" >
                        Our Services
                      </a>
                      <a class="justify-center m-auto md:m-px block md:inline-flex w-56 md:w-56 hover:bg-blue-300 text-white py-2 md:py-4 px-4 rounded-md leading-5" href="#">
                        Free Quote
                      </a>
                    </div>
                    <div class="flex m-auto justify-center lg:justify-start mt-4">
                    </div>
                </div>
            </div>
        </section> -->

    <section id="hero" class="w-full bg-center bg-cover h-auto">
        <div class="flex w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-white m-6 md:m-12 lg:m-24 text-center md:text-left md:w-2/3 lg:w-1/2">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl">Professional House Painters For Your Home or Business</h1>
                <h2 class="text-base leading-none md:text-xl my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero, quae recusandae repellendus sed sequi tenetur animi quidem eum cupiditate.</h2>
                <div class="m-auto justify-center lg:justify-start">
                  <a class="justify-center m-auto md:m-px block md:inline-flex w-56 md:w-56 bg-blue-800 hover:bg-blue-500 text-white py-2 md:py-4 px-4 rounded-md leading-5 md:mr-3 mb-3" href="#" >
                    Our Services
                  </a>
                  <a class="justify-center m-auto md:m-px block md:inline-flex w-56 md:w-56 hover:bg-blue-300 text-white py-2 md:py-4 px-4 rounded-md leading-5" href="#">
                    Free Quote
                  </a>
                </div>
                <div class="flex m-auto justify-center lg:justify-start mt-4">
                </div>
            </div>
        </div>
    </section>

        <!-- ============================================ -->
        <!--                  Services                    -->
        <!-- ============================================ -->

        <section id="services">
            
        </section>

        <!-- ============================================ -->
        <!--                   About                      -->
        <!-- ============================================ -->

        <section id="about">
            
        </section>
    </main>

    <!-- ============================================ -->
    <!--                     FOOTER                   -->
    <!-- ============================================ -->   
    <footer-nav/>  
  </div>
</template>

<script setup>
import HeaderNav from '../components/Header.vue'
import FooterNav from '../components/Footer.vue'
</script>

<style>
  #hero {
    background: url("/assets/images/image-10.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  /* #hero {
        height: auto;
        background: url("/assets/images/image-10.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
  } */
</style>