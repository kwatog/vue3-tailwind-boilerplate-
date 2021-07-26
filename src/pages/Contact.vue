<template>
  <div>
    <!-- header navigation component -->
    <header-nav/>
    <main id="main">
    
        <!-- ============================================ -->
        <!--                    LANDING                   -->
        <!-- ============================================ -->
    
        <section class="container">
          <div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('/assets/images/dog_eyeglass.jpg')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Get In Touch</h3>
            <p class="w-full px-3 py-2 text-sm leading-tight text-gray-700 appearance-none">
              Let us know if you have any questions or would like ot talk about a potential project. We respond to every call or email we get!
            </p>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <!-- <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
                  Name
                </label> -->
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  tabindex="1"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-4">
                <!-- <label class="block mb-2 text-sm font-bold text-gray-700" for="mobilenum">
                  Mobile Number
                </label> -->
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="mobilenum"
                  type="text"
                  tabindex="2"
                  placeholder="Mobile Number"
                />
              </div>                          
							<div class="mb-4">
								<!-- <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label> -->
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
                  tabindex="3"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4">
								<!-- <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Message
								</label> -->
								<textarea
									class="w-full h-40 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
									tabindex="5"
                  placeholder="Message"
								/>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Submit Inquiry
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
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

</style>