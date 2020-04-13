<template>
  <div
    v-bind:style="{
      maxHeight: '96.3vh',
      height: '100%',
      backgroundSize: 'cover'
    }"
  >
    <v-container fluid fill-height pr-0 pt-0 pl-0 pb-0>
    <navbar></navbar>
      <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-1>
          <Lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2>
          <Tasks />
        </v-flex>
        <v-flex lg3 pr-2 pl-2>
          <OptionsBar />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
import Lists from "~/components/Lists.vue";
import Tasks from "~/components/Tasks.vue";
import OptionsBar from "~/components/OptionsBar.vue";
export default {
  nome: "todo",
  components: {
    navbar,
    Lists,
    Tasks,
    OptionsBar
  }
};
</script>

<style></style>
