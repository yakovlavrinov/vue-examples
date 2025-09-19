<script setup lang="ts">
import { useUserStore } from 'src/entities/user/model/store';




const userStore = useUserStore()

</script>

<template>
  <n-input-group>
    <n-input v-model:value="userStore.searchQuery" placeholder="Поиск по имени" />
    <n-button @click="userStore.loadUsers" type="primary" ghost> Поиск </n-button>
  </n-input-group>
</template>

<style scoped>
.n-input-group {
  margin-bottom: 16px;
}

:deep(.n-input__input) {
  text-align: left !important;
}

:deep(.n-input__input::placeholder) {
  text-align: left;
}
</style>
