<template>
  <MainLayout>
    <div>
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Ticket Management</h1>
            <p class="mt-2 text-gray-600">Create, view, edit, and manage your tickets</p>
          </div>
          <button
            @click="openCreateModal"
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
            Create Ticket
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white shadow rounded-lg mb-6">
        <div class="px-4 py-5 sm:p-6">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <label for="search" class="block text-sm font-medium text-gray-700">Search</label>
              <input
                id="search"
                v-model="searchQuery"
                type="text"
                placeholder="Search tickets..."
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="statusFilter" class="block text-sm font-medium text-gray-700"
                >Status</label
              >
              <select
                id="statusFilter"
                v-model="statusFilter"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">All Status</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Tickets List -->
      <div class="bg-white shadow rounded-lg">
        <div v-if="filteredTickets.length === 0" class="text-center py-12">
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
          <h3 class="mt-2 text-sm font-medium text-gray-900">No tickets found</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating a new ticket.</p>
        </div>

        <div v-else class="divide-y divide-gray-200">
          <div v-for="ticket in filteredTickets" :key="ticket.id" class="p-6 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-medium text-gray-900">{{ ticket.title }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ ticket.description || 'No description' }}
                </p>
                <div class="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Created: {{ formatDate(ticket.createdAt) }}</span>
                  <span v-if="ticket.priority" class="capitalize"
                    >Priority: {{ ticket.priority }}</span
                  >
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClasses(ticket.status)"
                >
                  {{ ticket.status.replace('_', ' ') }}
                </span>
                <div class="flex space-x-2">
                  <button
                    @click="openEditModal(ticket)"
                    class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    @click="confirmDelete(ticket)"
                    class="text-red-600 hover:text-red-900 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Create/Edit Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
        @click="closeModal"
      >
        <div
          class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
          @click.stop
        >
          <div class="mt-3">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              {{ isEditing ? 'Edit Ticket' : 'Create New Ticket' }}
            </h3>

            <form @submit.prevent="handleSubmit">
              <div class="space-y-4">
                <div>
                  <label for="title" class="block text-sm font-medium text-gray-700">Title *</label>
                  <input
                    id="title"
                    v-model="form.title"
                    type="text"
                    required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    :class="{ 'border-red-500': errors.title }"
                    placeholder="Enter ticket title"
                  />
                  <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
                </div>

                <div>
                  <label for="description" class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <textarea
                    id="description"
                    v-model="form.description"
                    rows="3"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter ticket description"
                  ></textarea>
                </div>

                <div>
                  <label for="status" class="block text-sm font-medium text-gray-700"
                    >Status *</label
                  >
                  <select
                    id="status"
                    v-model="form.status"
                    required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    :class="{ 'border-red-500': errors.status }"
                  >
                    <option value="">Select status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  <p v-if="errors.status" class="mt-1 text-sm text-red-600">{{ errors.status }}</p>
                </div>

                <div>
                  <label for="priority" class="block text-sm font-medium text-gray-700"
                    >Priority</label
                  >
                  <select
                    id="priority"
                    v-model="form.priority"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="loading"
                  class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {{ loading ? 'Saving...' : isEditing ? 'Update' : 'Create' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div
        v-if="showDeleteModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
        @click="closeDeleteModal"
      >
        <div
          class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
          @click.stop
        >
          <div class="mt-3 text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mt-4">Delete Ticket</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to delete "{{ ticketToDelete?.title }}"? This action cannot be
                undone.
              </p>
            </div>
            <div class="flex justify-center space-x-3 mt-6">
              <button
                @click="closeDeleteModal"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                @click="handleDelete"
                :disabled="loading"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {{ loading ? 'Deleting...' : 'Delete' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast Notification -->
      <div class="fixed top-4 right-4 z-50">
        <Toast
          :show="showToast"
          :type="toastType"
          :title="toastTitle"
          :message="toastMessage"
          @close="showToast = false"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, watch } from 'vue'
import { useTicketsStore, type Ticket } from '@/stores/tickets'
import MainLayout from '@/components/Layout/MainLayout.vue'
import Toast from '@/components/UI/Toast.vue'

const ticketsStore = useTicketsStore()

// State
const searchQuery = ref('')
const statusFilter = ref('')
const showModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const loading = ref(false)
const ticketToDelete = ref<Ticket | null>(null)

// Form data
const form = reactive({
  title: '',
  description: '',
  status: '',
  priority: '',
})

const errors = reactive({
  title: '',
  status: '',
})

// Toast state
const showToast = ref(false)
const toastType = ref<'success' | 'error' | 'info'>('info')
const toastTitle = ref('')
const toastMessage = ref('')

// Computed
const filteredTickets = computed(() => {
  let filtered = ticketsStore.tickets

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (ticket) =>
        ticket.title.toLowerCase().includes(query) ||
        (ticket.description && ticket.description.toLowerCase().includes(query)),
    )
  }

  if (statusFilter.value) {
    filtered = filtered.filter((ticket) => ticket.status === statusFilter.value)
  }

  return filtered
})

// Methods
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

const showNotification = (type: 'success' | 'error' | 'info', title: string, message: string) => {
  toastType.value = type
  toastTitle.value = title
  toastMessage.value = message
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 5000)
}

const resetForm = () => {
  form.title = ''
  form.description = ''
  form.status = ''
  form.priority = ''
  errors.title = ''
  errors.status = ''
}

const validateForm = () => {
  errors.title = ''
  errors.status = ''

  let isValid = true

  if (!form.title.trim()) {
    errors.title = 'Title is required'
    isValid = false
  }

  if (!form.status) {
    errors.status = 'Status is required'
    isValid = false
  } else if (!['open', 'in_progress', 'closed'].includes(form.status)) {
    errors.status = 'Status must be open, in_progress, or closed'
    isValid = false
  }

  return isValid
}

const openCreateModal = () => {
  resetForm()
  isEditing.value = false
  showModal.value = true
}

const openEditModal = (ticket: Ticket) => {
  form.title = ticket.title
  form.description = ticket.description || ''
  form.status = ticket.status
  form.priority = ticket.priority || ''
  isEditing.value = true
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  resetForm()
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true

  try {
    if (isEditing.value) {
      // Find the ticket being edited
      const ticket = ticketsStore.tickets.find(
        (t) => t.title === form.title && t.status === form.status,
      )
      if (ticket) {
        ticketsStore.updateTicket(ticket.id, {
          title: form.title,
          description: form.description,
          status: form.status as 'open' | 'in_progress' | 'closed',
          priority: form.priority as 'low' | 'medium' | 'high' | undefined,
        })
        showNotification('success', 'Success!', 'Ticket updated successfully.')
      }
    } else {
      ticketsStore.addTicket({
        title: form.title,
        description: form.description,
        status: form.status as 'open' | 'in_progress' | 'closed',
        priority: form.priority as 'low' | 'medium' | 'high' | undefined,
      })
      showNotification('success', 'Success!', 'Ticket created successfully.')
    }

    closeModal()
  } catch (error) {
    showNotification('error', 'Error', 'Failed to save ticket. Please try again.')
  } finally {
    loading.value = false
  }
}

const confirmDelete = (ticket: Ticket) => {
  ticketToDelete.value = ticket
  showDeleteModal.value = true
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  ticketToDelete.value = null
}

const handleDelete = async () => {
  if (!ticketToDelete.value) return

  loading.value = true

  try {
    ticketsStore.deleteTicket(ticketToDelete.value.id)
    showNotification('success', 'Success!', 'Ticket deleted successfully.')
    closeDeleteModal()
  } catch (error) {
    showNotification('error', 'Error', 'Failed to delete ticket. Please try again.')
  } finally {
    loading.value = false
  }
}

// Watch for URL parameters to open create modal
watch(
  () => window.location.search,
  (newSearch) => {
    const params = new URLSearchParams(newSearch)
    if (params.get('action') === 'create') {
      openCreateModal()
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname)
    }
  },
  { immediate: true },
)

onMounted(() => {
  ticketsStore.loadTickets()
})
</script>
