<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app> </v-footer>
  </v-app>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";
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
          icon: "",
          title: "Register",
          to: "/register"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "settings",
          title: "Settings",
          to: "/Settings"
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
<style>
.largeMargintop {
  margin-top: 3rem;
}
</style>
