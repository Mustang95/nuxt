<template>
  <v-list-item @click.prevent="toggle(index)">
    <v-list-item-action>
      <v-btn icon>
        <v-icon>
          edit
        </v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title> {{task.title}}
        <v-list-item-subtitle> {{task.subtitle}} </v-list-item-subtitle>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action-text>
        <v-icon color="green" v-if="task.IsComplete">check_circle</v-icon>
        <v-icon color="grey" v-else>check_circle</v-icon>
    </v-list-item-action-text>
  </v-list-item>
</template>

<script>
export default {
  name: "task",
  props: {
      task: Object,
      index: Number
  }
};
</script>

<style></style>
