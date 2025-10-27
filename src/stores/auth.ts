import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ id: string; email: string; name: string } | null>(null)
  const token = ref<string | null>(localStorage.getItem('ticketapp_session'))

  const isAuthenticated = computed(() => !!token.value)

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would be an API call
    if (email === 'admin@example.com' && password === 'password') {
      const mockUser = {
        id: '1',
        email: email,
        name: 'Admin User',
      }
      const mockToken = 'mock-jwt-token-' + Date.now()

      user.value = mockUser
      token.value = mockToken
      localStorage.setItem('ticketapp_session', mockToken)
      localStorage.setItem('ticketapp_user', JSON.stringify(mockUser))

      return { success: true }
    } else {
      return { success: false, error: 'Invalid credentials' }
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock signup - in real app, this would be an API call
    const mockUser = {
      id: Date.now().toString(),
      email: email,
      name: name,
    }
    const mockToken = 'mock-jwt-token-' + Date.now()

    user.value = mockUser
    token.value = mockToken
    localStorage.setItem('ticketapp_session', mockToken)
    localStorage.setItem('ticketapp_user', JSON.stringify(mockUser))

    return { success: true, error: undefined }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('ticketapp_session')
    localStorage.removeItem('ticketapp_user')
  }

  const initializeAuth = () => {
    const storedUser = localStorage.getItem('ticketapp_user')
    if (storedUser && token.value) {
      user.value = JSON.parse(storedUser)
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    signup,
    logout,
    initializeAuth,
  }
})
