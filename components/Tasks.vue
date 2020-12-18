<template>
  <div style="height: 100%;">
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>
          Lista de tarefas
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click.prevent="a()" icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line style="height: calc(100% - 124px); overflow-y: scroll">
        <template 
        v-for="list of lists">
          <Task v-bind:key="list.id" :task="list.tasks" :index="list.id" />
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-layout>
          <v-flex>
            <NewTask v-if="DISPLAY_ADD_TASK"/>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <!-- <NotesModal /> -->
  </div>
</template>

<script>
import NotesModal from "~/components/NotesModal.vue";
import Task from "~/components/Task.vue";
import NewTask from "~/components/NewTask.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";
const baseURL = 'http://localhost:3000/tasks'

export default {
  name: "tasks",
  components: {
    Task,
    NewTask,
    NotesModal
  },
   data () {
    return {
      lists: []
    };
  },
  
  computed: {
    ...mapGetters(['DISPLAY_ADD_TASK']),
  }
};
</script>

<style></style>
