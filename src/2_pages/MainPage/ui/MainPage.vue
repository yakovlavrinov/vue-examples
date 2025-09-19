<script setup>
import { UserTable } from "src/widgets/user-table";
import { UserSearch } from "src/features/user-search";
import { onMounted } from "vue";
import { useUserStore } from "src/entities/user/model/store";



const userStore = useUserStore();

onMounted(() => {
  userStore.loadUsers();
});
</script>

<template>
  <div>
    <user-search />
    <user-table />
  </div>
</template>

<style lang="scss" scoped></style>
