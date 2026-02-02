<script setup lang="ts">
import { useUserStore } from 'src/entities/user/model/store'
import UserTableColumns from './UserTableColumns.vue'
import UserTableRows from './UserTableRows.vue'
import { NAlert, NEmpty, NResult, NSpin, NText } from 'naive-ui'

const userStore = useUserStore()
const columns = [
  { type: 'id', name: 'id' },
  { type: 'fullname', name: 'ФИО' },
  { type: 'tel', name: 'Номер' },
  { type: 'email', name: 'Электронная почта' },
  { type: 'address', name: 'Адрес' },
  { type: 'position', name: 'Должность' },
  { type: 'salary', name: 'ЗП' },
]
</script>

<template>
  <n-table :bordered="false" :single-line="false">
    <UserTableColumns :columns />
    <UserTableRows :columns :users="userStore.users" />
  </n-table>

  <NText type="primary" v-if="userStore.isLoading">Загрузка данных...</NText>
  <NText type="error" v-else-if="userStore.error" class="message">Ошибка</NText>
  <NText type="warning" v-else-if="userStore.users.length === 0" class="message">Не найдено</NText>
</template>

<style scoped></style>
