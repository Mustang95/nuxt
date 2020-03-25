<template>
  <v-app>
    <v-app-bar fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- <v-btn icon @click="completed = true">
        <v-icon>done_all</v-icon>
      </v-btn> -->
      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/inspire">
            <v-list-item-icon>
              <v-icon>done_all</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Task Completes</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- 
     -->
         <v-navigation-drawer v-model="completed" absolute temporary :right="right">

    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      completed: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      taskscampleted: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
