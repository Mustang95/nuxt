<template>
  <v-layout column justify-center align-center>
    <div class="largeMargintop"></div>
    <v-col>
      <v-row>
        <v-col cols="4">
          <form action="">
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nome da Tarefa"
              solo
            ></v-text-field>
            <v-text-field
              v-model="description"
              :counter="10"
              label="Descrição da Tarefa"
              solo
            ></v-text-field>
            <v-btn color="success" @click.prevent="onSubmit" class="mr-4 red"
              >Gravar Tarefas</v-btn
            >
          </form>
        </v-col>
        <v-col cols="8">
          <h2>Lista de Tarefas</h2>
          <p v-if="!tasks.length">Você não tem tarefas</p>
          <v-card class="mx-auto" max-width="auto" tile>
            <v-list-item v-for="(task, index) in tasks" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ task.name }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  task.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                  <v-icon @click="onRemove(index)">email</v-icon>
                </v-list-item-icon>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-layout>
</template>
<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    name: "",
    description: "",
    tasks: []
  }),
  methods: {
    onSubmit() {
      let productTask = {
        name: this.name,
        description: this.description
      };
      this.addTask(productTask);
      //productTask.name = null;
      //productTask.description = null;
    },
    addTask(productTask) {
      this.tasks.push(productTask);
    },
    onRemove(index) {
      debugger;
      this.tasks.splice(index, 1);
    },
    onDelete() {
      debugger;
    }
  }
};
</script>
<style>
.largeMargintop {
  margin-top: 3rem;
}
</style>
