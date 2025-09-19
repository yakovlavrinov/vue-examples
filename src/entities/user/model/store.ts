import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "./types";
import { fetchUsers } from "./api/userApi";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref("");

  const loadUsers = async () => {
    try {
      isLoading.value = true;
      const res = (await fetchUsers()) as User[];
      users.value = res;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to load users";
    } finally {
      isLoading.value = false;
    }
  };

  const searchUsers = () => {
    if (searchQuery.value) {
      users.value = users.value.filter((user) =>
        user.fullname.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    } else {
        loadUsers()
    }
  };

  return {
    users,
    searchQuery,
    loadUsers,
    searchUsers,
  };
});
