import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'

interface State {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: null
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})
