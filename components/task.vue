<template>
  <v-list-item>
    <v-list-item-action>
      <NotesModal/>
      <!-- <v-btn icon>
        <v-icon>
          edit
        </v-icon>
      </v-btn> -->
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        {{ task.title }}
        <v-list-item-subtitle> {{ task.subtitle }} </v-list-item-subtitle>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action-text>
      <v-icon color="green" v-if="task.IsComplete">check_circle</v-icon>
      <v-icon color="grey" v-else>check_circle</v-icon>
    </v-list-item-action-text>
  </v-list-item>
</template>

<script>
import NotesModal from '~/components/NotesModal'
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
      debugger
      this.$parent.$emit("openModal", this.task.id);
    }
  }
};
</script>

<style></style>
