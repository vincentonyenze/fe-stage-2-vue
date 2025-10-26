import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Ticket {
  id: string
  title: string
  description?: string
  status: 'open' | 'in_progress' | 'closed'
  priority?: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

export const useTicketsStore = defineStore('tickets', () => {
  const tickets = ref<Ticket[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Load tickets from localStorage on initialization
  const loadTickets = () => {
    const stored = localStorage.getItem('ticketapp_tickets')
    if (stored) {
      tickets.value = JSON.parse(stored)
    } else {
      // Initialize with some sample tickets
      tickets.value = [
        {
          id: '1',
          title: 'Fix login bug',
          description: 'Users cannot login with special characters in password',
          status: 'open',
          priority: 'high',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Add dark mode',
          description: 'Implement dark mode toggle for better user experience',
          status: 'in_progress',
          priority: 'medium',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Update documentation',
          description: 'Update API documentation for new endpoints',
          status: 'closed',
          priority: 'low',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]
      saveTickets()
    }
  }

  const saveTickets = () => {
    localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets.value))
  }

  const addTicket = (ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTicket: Ticket = {
      ...ticketData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    tickets.value.unshift(newTicket)
    saveTickets()
    return newTicket
  }

  const updateTicket = (id: string, updates: Partial<Omit<Ticket, 'id' | 'createdAt'>>) => {
    const index = tickets.value.findIndex((ticket) => ticket.id === id)
    if (index !== -1) {
      tickets.value[index] = {
        ...tickets.value[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      saveTickets()
      return tickets.value[index]
    }
    return null
  }

  const deleteTicket = (id: string) => {
    const index = tickets.value.findIndex((ticket) => ticket.id === id)
    if (index !== -1) {
      tickets.value.splice(index, 1)
      saveTickets()
      return true
    }
    return false
  }

  const getTicketById = (id: string) => {
    return tickets.value.find((ticket) => ticket.id === id)
  }

  // Computed properties for dashboard statistics
  const totalTickets = computed(() => tickets.value.length)
  const openTickets = computed(() => tickets.value.filter((t) => t.status === 'open').length)
  const inProgressTickets = computed(
    () => tickets.value.filter((t) => t.status === 'in_progress').length,
  )
  const closedTickets = computed(() => tickets.value.filter((t) => t.status === 'closed').length)

  return {
    tickets,
    loading,
    error,
    loadTickets,
    addTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    totalTickets,
    openTickets,
    inProgressTickets,
    closedTickets,
  }
})
