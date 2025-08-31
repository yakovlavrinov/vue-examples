<template>
  <n-config-provider :theme="true ? darkTheme : null">
    <n-data-table :columns="columns" :data="data" :bordered="true" />
  </n-config-provider>
</template>

<script setup>
import { h, ref } from "vue";
import {
  NConfigProvider,
  darkTheme,
  NDataTable,
  NSelect,
  NSpace,
  NButton,
  NTag,
} from "naive-ui";
import { useRouter } from "vue-router"; // если используешь роутер

// Пример данных
const data = ref([
  { id: 1, name: "Иван", status: "active", category: 1 },
  { id: 2, name: "Мария", status: "inactive", category: 2 },
]);

// Опции для селекта
const categoryOptions = [
  { label: "Категория 1", value: 1 },
  { label: "Категория 2", value: 2 },
  { label: "Категория 3", value: 3 },
];

const router = useRouter();

// Функция для перехода
const goToUser = (id) => {
  router.push(`/user/${id}`); // или window.open, или emit — как нужно
};

const columns = [
  {
    title: "Имя",
    key: "name",
    // Обычное значение
  },
  {
    title: "Категория",
    key: "category",
    render(row) {
      return h(NSelect, {
        options: categoryOptions,
        value: row.category,
        "on-update:value"(value) {
          row.category = value;
          console.log("Выбрано:", value);
          // Здесь можно отправить на сервер
        },
        style: "width: 150px;",
      });
    },
  },
  {
    title: "Статус",
    key: "status",
    render(row) {
      const color = row.status === "active" ? "success" : "error";
      return h(NTag, { type: color }, { default: () => row.status });
    },
  },
  {
    title: "Действия",
    key: "actions",
    render(row) {
      return h(NSpace, null, {
        default: () => [
          h(
            NButton,
            {
              text: true,
              onClick: () => goToUser(row.id),
            },
            { default: () => "Открыть профиль" }
          ),
        ],
      });
    },
  },
];
</script>
