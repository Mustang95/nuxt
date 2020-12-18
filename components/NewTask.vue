<template>
  <v-form @submit.prevent="createNewTask()">
    <v-text-field
      v-model="taskTitle"
      label="Adicionar nova tarefa"
      solo
      filled
      clearable
      dense
      append-icon="add"
      @click:append="foo()"
    ></v-text-field>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
const baseURL = "http://localhost:3000/tasks";
export default {
  name: "newTask",
  data: () => ({
    taskTitle: ""
  }),
  methods: {
    async createNewTask() {
      var ctrl = this;
      return new Promise((resolve, reject) => {
        axios
          .post(baseURL, { title: this.taskTitle })
          .then(({ data }) => {
            ctrl.task = {};
            ctrl.task[Symbol.iterator] = function*() {
              data;
            };
            ctrl.taskTitle = "";
            resolve(data);
          })
          .catch(error => {
            ctrl.taskTitle = "";
            reject(error);
          });
      });
    },
    // async createNewTask() {
    //   debugger
    //   let { data } = await axios.post(`/lists/${this.$route.params.id}/tasks`, {
    //   title: this.taskTitle
    // });
    // this.lists = [...this.lists, res.data];
    // }
    foo(){

    }
  }
};
</script>

<style></style>
