<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white border-b border-[#e2e8f0]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="ml-2 text-xl font-bold! text-gray-900">TicketApp</span>
          </div>
          <div class="flex space-x-4">
            <router-link
              to="/auth/login"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium!"
            >
              Login
            </router-link>
            <router-link
              to="/auth/signup"
              class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium!"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden flex justify-center items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold! text-gray-900 mb-6">
            Streamline Your
            <span class="text-blue-600 font-bold!"> Ticket Management</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto py-5">
            A powerful, intuitive platform to manage support tickets, track
            progress, and deliver exceptional customer service across your
            organization.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/auth/signup"
              class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium! rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link
              to="/auth/login"
              class="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium! rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Login
            </router-link>
          </div>
        </div>
      </div>

      <!-- Decorative Circle -->
      <div class="absolute top-20 right-10 hidden lg:block">
        <div class="w-32 h-32 opacity-60">
          <svg viewBox="0 0 200 200" class="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="#3B82F6"
              fill-opacity="0.1"
              stroke="#3B82F6"
              stroke-width="2"
              stroke-opacity="0.3"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="#3B82F6"
              fill-opacity="0.05"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="#3B82F6"
              fill-opacity="0.1"
            />
          </svg>
        </div>
      </div>

      <!-- Wavy Background -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" class="w-full h-32">
          <path
            fill="#3B82F6"
            fill-opacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white relative">
      <!-- Second Decorative Circle -->
      <div class="absolute top-10 left-10 hidden lg:block">
        <div class="w-24 h-24 opacity-40">
          <svg viewBox="0 0 200 200" class="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="#10B981"
              fill-opacity="0.1"
              stroke="#10B981"
              stroke-width="1"
              stroke-opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="#10B981"
              fill-opacity="0.05"
            />
          </svg>
        </div>
      </div>
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 py-10">
          <h2 class="text-3xl font-bold! text-gray-900 mb-4">
            Everything you need to manage tickets
          </h2>
          <p class="text-xl text-gray-600 pt-3">
            Powerful features designed to streamline your workflow
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold! text-gray-900 mb-4">
              Smart Ticket Management
            </h3>
            <p class="text-gray-600">
              Create, assign, and track tickets with ease. Our intuitive
              interface makes ticket management simple and efficient.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold! text-gray-900 mb-4">
              Team Collaboration
            </h3>
            <p class="text-gray-600">
              Work together seamlessly with your team. Assign tickets, add
              comments, and keep everyone in the loop.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold! text-gray-900 mb-4">
              Analytics & Insights
            </h3>
            <p class="text-gray-600">
              Get valuable insights into your ticket performance with detailed
              analytics and reporting tools.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold! text-white mb-4">
          Ready to get started?
        </h2>
        <p class="text-xl text-blue-100 mb-8 py-4">
          Join thousands of teams already using TicketApp to manage their
          support tickets.
        </p>
        <router-link
          to="/auth/signup"
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium! rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
        >
          Start Free Trial
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="ml-2 text-xl font-bold!">TicketApp</span>
          </div>
          <div class="text-gray-400">
            © 2025 TicketApp by Vincent. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Landing page component
</script>
