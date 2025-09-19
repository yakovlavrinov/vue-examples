<script setup lang="ts">
import type { UserTableColumn } from "src/entities/user/model/types";

interface Props {
  columns: UserTableColumn[];
}

const props = defineProps<Props>();
</script>

<template>
  <thead>
    <tr>
      <td><n-checkbox /></td>
      <th v-for="column in props.columns" :key="column.type">
        {{ column.name }}
      </th>
    </tr>
  </thead>
</template>

<style scoped></style>
