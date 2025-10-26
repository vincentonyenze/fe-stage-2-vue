<template>
  <MainLayout>
    <div>
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="mt-2 text-gray-600">Welcome back, {{ authStore.user?.name }}!</p>
      </div>

      <!-- Statistics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Tickets Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="shrink-0">
                <div class="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
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
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Total Tickets</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ ticketsStore.totalTickets }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- Open Tickets Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="shrink-0">
                <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Open Tickets</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ ticketsStore.openTickets }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress Tickets Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="shrink-0">
                <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">In Progress</dt>
                  <dd class="text-lg font-medium text-gray-900">
                    {{ ticketsStore.inProgressTickets }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- Closed Tickets Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="shrink-0">
                <div class="w-8 h-8 bg-gray-500 rounded-md flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Closed Tickets</dt>
                  <dd class="text-lg font-medium text-gray-900">
                    {{ ticketsStore.closedTickets }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white shadow rounded-lg mb-8">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/tickets"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Manage Tickets
            </router-link>
            <button
              @click="createNewTicket"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Create New Ticket
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Tickets -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Tickets</h3>
            <router-link
              to="/tickets"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View all
            </router-link>
          </div>

          <div v-if="recentTickets.length === 0" class="text-center py-8">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
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
            <h3 class="mt-2 text-sm font-medium text-gray-900">No tickets</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new ticket.</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="ticket in recentTickets"
              :key="ticket.id"
              class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div class="flex-1">
                <h4 class="text-sm font-medium text-gray-900">{{ ticket.title }}</h4>
                <p class="text-sm text-gray-500">{{ ticket.description || 'No description' }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClasses(ticket.status)"
                >
                  {{ ticket.status.replace('_', ' ') }}
                </span>
                <span class="text-sm text-gray-500">
                  {{ formatDate(ticket.createdAt) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTicketsStore } from '@/stores/tickets'
import MainLayout from '@/components/Layout/MainLayout.vue'

const router = useRouter()
const authStore = useAuthStore()
const ticketsStore = useTicketsStore()

const recentTickets = computed(() => {
  return ticketsStore.tickets.slice(0, 5)
})

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-green-100 text-green-800'
    case 'in_progress':
      return 'bg-yellow-100 text-yellow-800'
    case 'closed':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}

const createNewTicket = () => {
  router.push('/tickets?action=create')
}

onMounted(() => {
  ticketsStore.loadTickets()
})
</script>
