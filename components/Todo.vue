<template>
  <div style="max-height: 80vh">
    <v-container fluid fill-height pr-0 pt-0 pl-0 pb-0>
      <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-1 style="max-height: 80vh">
          <Lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2 style="max-height: 80vh">
          <Tasks />
        </v-flex>
        <v-flex lg3 pr-2 pl-2>
          <OptionsBar />
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <footer heigth="100%" color="indigo" pr-0 pt-0 pl-0 pb-0>
      <v-layout justify-center>
        <v-flex indigo white--text text-center>
          &copy;2020 <strong>Luiz Roupinha</strong>
        </v-flex>
      </v-layout>
    </footer> -->
  </div>
</template>

<script>
import Lists from "~/components/Lists.vue";
import Tasks from "~/components/Tasks.vue";
import OptionsBar from "~/components/OptionsBar.vue";
export default {
  nome: "todo",
  components: {
    Lists,
    Tasks,
    OptionsBar
  }
};
</script>

<style></style>
