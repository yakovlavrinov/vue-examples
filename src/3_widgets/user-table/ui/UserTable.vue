<script setup lang="ts">


import { useUserStore } from "src/entities/user/model/store";
import UserTableColumns from "./UserTableColumns.vue";
import UserTableRows from "./UserTableRows.vue";

const userStore = useUserStore();
const columns = [
  { type: "id", name: "id" },
  { type: "fullname", name: "ФИО" },
  { type: "tel", name: "Номер" },
  { type: "email", name: "Электронная почта" },
  { type: "address", name: "Адрес" },
  { type: "position", name: "Должность" },
  { type: "salary", name: "ЗП" },
];
</script>

<template>
  <n-table :bordered="false" :single-line="false">
    <user-table-columns :columns />
    <user-table-rows :columns :users="userStore.users" />
  </n-table>
</template>

<style scoped></style>
