<template>
  <div style="height: 100%;">
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>
          Lista de tarefas
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line style="height: calc(100% - 124px); overflow-y: scroll">
        <template v-for="(task, key) in tasks">
          <Task v-bind:key="key" :task="task" :index="key" />
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-layout>
          <v-flex>
            <NewTask></NewTask>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <NotesModal/>
  </div>
</template>

<script>
import Task from "~/components/Task.vue";
import NewTask from "~/components/NewTask.vue";
import NotesModal from "~/components/NotesModal.vue";
export default {
  name: "tasks",
  components: {
    Task,
    NewTask,
    NotesModal
  },
  data: () => ({
    tasks: [
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123"
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123"
      },
      {
        id: 1,
        title: "Schedule",
        subtitle: "teste 123"
      },
      {
        id: 1,
        title: "Schedule"
      },
      {
        id: 1,
        title: "Schedule"
      },
      {
        id: 1,
        title: "Schedule",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule"
      },
      {
        id: 1,
        title: "Schedule",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule"
      },
      {
        id: 1,
        title: "Schedule"
      },
      {
        id: 1,
        title: "Schedule",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule",
        IsComplete: true
      },
      {
        id: 1,
        title: "Schedule"
      }
    ]
  }),
  methods: {
    toggle(index) {
      this.$store.dispatch("TOGGLE_TASK", {
        taskId: this.task.id,
        listId: this.$route.params.id
      });
      // TODO: push the changes to the store.
    }
  }
};
</script>

<style></style>
