<script setup lang="ts"></script>

<template>
  <n-input-group>
    <n-input placeholder="Поиск по имени" />
    <n-button type="primary" ghost> Поиск </n-button>
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
