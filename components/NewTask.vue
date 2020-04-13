<template>
  <v-form @submit.prevent="createNewTask()">
    <v-text-field v-model="title" label="Adicionar nova tarefa" solo filled clearable dense append-icon="add"></v-text-field>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "newTask",
  data: () => ({
    title: ""
  }),
  methods: {
    createNewTask() {
        debugger;
        if (!this.title) {
          return;
        }
        this.addTask({ title: this.title, id: this.$store.state.counter}); //, id: this.$route.params.id 
      this.$store.commit("increment");
      },
      ...mapActions(["addTask"]),
      //   async createNewTask() {
      // await this.$store.dispatch("POST_TASK", {
      //   taskTitle: this.title,
      //   listId: this.$route.params.id
      // });
     // this.title = "";
    //}
  }
};
</script>

<style></style>
