<template>
  <v-container>
    <navbar></navbar>
    <Todo></Todo>
  </v-container>
</template>
<script>
import Todo from "~/components/Todo.vue";
import navbar from "~/components/navbar.vue";


export default {
  components: {
    Todo,
    navbar
  },
};
</script>
<style></style>
