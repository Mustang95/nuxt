<template>
  <v-list-item ripple >
    <v-list-item-action>
       <v-btn icon @click.stop="openModal()">
        <v-icon color="pink">edit</v-icon>
      </v-btn>
      <!-- <NotesModal/> -->
      <!-- <v-btn icon>
        <v-icon>
          edit
        </v-icon>
      </v-btn> -->
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        {{ task.title }}
        <v-list-item-subtitle> {{ task.id }} </v-list-item-subtitle>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action-text>
      <v-icon :color="task.IsComplete ? 'green' : 'grey'">check_circle</v-icon>
      <!-- <v-icon :color="grey" v-else>check_circle</v-icon> -->
    </v-list-item-action-text>
  </v-list-item>
</template>

<script>
import NotesModal from '~/components/NotesModal'
const baseURL = 'http://localhost:3000/tasks'
export default {
  name: "task",
  components: {
    NotesModal
  },
  props: {
    task: Object,
    index: Number
  },
  data: () => ({
    modal: false,
  }),
  methods: {
    openModal() {
      this.$router.push({
        name: "notes",
        params: { taskId: this.task.id }
      });
    }
  }
};
</script>

<style></style>
