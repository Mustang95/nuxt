<template>
  <v-app>
    <headerBar></headerBar>
    <v-content>
      <v-container>
      <nuxt></nuxt>
      </v-container>
    </v-content>
    <footerBar></footerBar>
  </v-app>
</template>

<script>
import headerBar from '~/components/General/HeaderBar.vue'
import footerBar from '~/components/General/footerBar.vue'
export default {
  components: {
    headerBar,
    footerBar
  },
  data() {
    return {
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
