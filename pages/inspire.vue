<template>
  <v-container fluid style="display: block">
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" md="12">
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <form action="">
              <v-text-field
                v-model="name"
                :counter="10"
                label="Nome da Tarefa" solo
              ></v-text-field>
              <v-text-field
                v-model="description"
                :counter="10"
                label="Descrição da Tarefa" solo
              ></v-text-field>
              <v-btn color="success" @click.prevent="onSubmit" class="mr-4 red"
                >Gravar Tarefas</v-btn
              >
            </form>
          </v-col>
          <v-col cols="8">
            <h2>Lista de Tarefas</h2>
            <p v-if="!tasks.length">Você não tem tarefas</p>
            <v-simple-table fixed-header height="auto">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Tarefa</th>
                    <th class="text-left">Descrição</th>
                    <th class="text-left">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.name }}</td>
                    <td>{{ task.description }}</td>
                    <td><v-btn @click="onRemove(index)">x</v-btn></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.red {
  background-color: red !important;
}
</style>
