<template>
  <v-layout row align-space-between justify-space-between>
    <navbar></navbar>
    <v-flex lg3 pr-1>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
    <v-flex lg6 pr-2 pl-2>
      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <input type="file" style="display: none" ref="image" />
          </v-flex>
          <h2>countador: {{ this.$store.state.counter }}</h2>
          <v-btn @click="add_one"></v-btn>
          <v-btn to="/"
            >Sair
            <v-icon right dark>exit_to_app</v-icon>
          </v-btn>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import navbar from "~/components/navbar.vue";
export default {
  name: "settings",
  components: {
    navbar
  },
  data: () => ({
    open: true
  }),
  methods: {
    add_one() {
      debugger
      this.$store.commit("increment");
    }
  }
};
</script>

<style></style>
