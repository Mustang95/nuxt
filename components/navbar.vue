<template>
  <v-container>
    <v-app-bar app clipped-left pb-0>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title ml-3 mr-5">Title</v-toolbar-title>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon to="/settings">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>done_all</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Task Completes</v-list-item-title>
            <HistoricTasks />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import HistoricTasks from "~/components/HistoricTasks.vue";
export default {
  name: "navbar",
  components: {
    HistoricTasks,
  },
  data() {
    return {
      completed: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      taskscampleted: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style></style>
