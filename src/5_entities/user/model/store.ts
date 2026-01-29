import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from './types'
import { fetchUsers } from './api/userApi'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const searchQuery = ref('')

  const loadUsers = async () => {
    try {
      isLoading.value = true
      const res = (await fetchUsers()) as User[]
      if (searchQuery.value) {
        users.value = searchUsers(res)
      } else {
        users.value = res
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load users'
    } finally {
      isLoading.value = false
    }
  }

  const searchUsers = (users: User[]) => {
    return users.filter((user) =>
      user.fullname.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  return {
    users,
    searchQuery,
    loadUsers,
  }
})
