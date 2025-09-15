<script setup lang="ts">
import UserTableColumns from "./UserTableColumns.vue";
import UserTableRows from "./UserTableRows.vue";

const columns = [
  { type: "id", name: "id" },
  { type: "fullname", name: "ФИО" },
  { type: "tel", name: "Номер" },
  { type: "email", name: "Электронная почта" },
  { type: "address", name: "Адрес" },
  { type: "position", name: "Должность" },
  { type: "salary", name: "ЗП" },
];

const users = [
  {
    id: 1,
    fullname: "Иванов Иван Иванович",
    tel: "88005553535",
    email: "aaaa@mail.ru",
    address: "г Москва ул Московская",
    position: "Frontend-разработчик",
    salary: 200000,
  },
  {
    id: 2,
    fullname: "Иванов Иван Иванович",
    tel: "88005553535",
    email: "aaaa@mail.ru",
    address: "г Москва ул Московская",
    position: "Frontend-разработчик",
    salary: 200000,
  },
  {
    id: 3,
    fullname: "Иванов Иван Иванович",
    tel: "88005553535",
    email: "aaaa@mail.ru",
    address: "г Москва ул Московская",
    position: "Frontend-разработчик",
    salary: 200000,
  },
];
</script>

<template>
  <n-table :bordered="false" :single-line="false">
    <user-table-columns :columns />
    <user-table-rows :columns :users />
  </n-table>
</template>

<style scoped></style>
