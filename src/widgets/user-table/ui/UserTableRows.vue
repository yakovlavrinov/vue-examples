<script setup lang="ts">
import type { User, UserTableColumn } from "../../../entities/user/model/types";

interface Props {
  columns: UserTableColumn[];
  users: User[];
}

const props = defineProps<Props>();
const { columns, users } = props;
</script>

<template>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <td v-for="column in columns" :key="column.type">
        {{ user[column.type as keyof User] }}
      </td>
    </tr>
  </tbody>
</template>

<style scoped></style>
