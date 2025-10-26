<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 to-blue-100 w-full">
    <!-- Hero Section with Wavy Background -->
    <div class="relative overflow-hidden min-h-screen flex items-center w-full">
      <!-- Decorative Circles -->
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-60 z-0"
      ></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-40 z-0"></div>
      <div
        class="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-50 z-0"
      ></div>

      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex justify-center">
        <div class="text-center w-full">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Welcome to
            <span class="text-indigo-600 block sm:inline">TicketApp</span>
          </h1>
          <p
            class="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Streamline your ticket management with our powerful, intuitive platform. Create, track,
            and resolve tickets with ease across your entire team.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <router-link
              to="/auth/login"
              class="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Login
            </router-link>
            <router-link
              to="/auth/signup"
              class="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>

      <!-- Wavy Background SVG -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-20 fill-white">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage tickets efficiently
          </p>
        </div>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Feature Card 1 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div class="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Easy Ticket Creation</h3>
            <p class="text-gray-600 leading-relaxed">
              Create tickets quickly with our intuitive form and smart validation system.
            </p>
          </div>

          <!-- Feature Card 2 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Real-time Tracking</h3>
            <p class="text-gray-600 leading-relaxed">
              Track ticket status in real-time with our comprehensive dashboard and analytics.
            </p>
          </div>

          <!-- Feature Card 3 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Advanced Management</h3>
            <p class="text-gray-600 leading-relaxed">
              Edit, update, and manage tickets with our full-featured CRUD operations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 bg-indigo-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p class="text-lg sm:text-xl text-indigo-100 mb-12 leading-relaxed">
            Join thousands of teams already using TicketApp to manage their workflow.
          </p>
          <div class="flex justify-center">
            <router-link
              to="/auth/signup"
              class="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Free Trial
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-3xl font-bold mb-6">TicketApp</h3>
          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Streamline your ticket management workflow
          </p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors"
              >Terms of Service</a
            >
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div class="mt-12 pt-8 border-t border-gray-800">
            <p class="text-gray-400">&copy; 2024 TicketApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Landing page component
</script>
