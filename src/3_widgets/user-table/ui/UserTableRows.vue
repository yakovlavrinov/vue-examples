<script setup lang="ts">
import type { User, UserTableColumn } from 'src/entities/user/model/types'

interface Props {
  columns: UserTableColumn[]
  users: User[]
}

const props = defineProps<Props>()
</script>

<template>
  <tbody>
    <tr v-for="user in props.users" :key="user.id">
      <td><n-checkbox /></td>
      <td v-for="column in props.columns" :key="column.type">
        {{ user[column.type as keyof User] }}
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
tr td {
  transition: background-color 0.7s ease;
}

tr:hover td {
  background-color: rgba(29, 131, 97, 0.5);
  cursor: pointer;
}
</style>
