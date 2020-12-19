<template>
  <v-layout column ma-8>
    <v-row ma-8>
      <v-col cols="12" lg="3" md="3">
        <!-- :lg="generalPanelSize" -->
        <card></card>
      </v-col>
      <v-col cols="12" lg="3" md="3">
        <card></card>
      </v-col>
      <v-col cols="12" lg="3" md="3">
        <card></card>
      </v-col>
      <v-col cols="12" lg="3" md="3">
        <card></card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import card from "~/components/Menu/Cards.vue";
export default {
  components: {
    card
  },
  data: () => ({}),
  methods: {}
};
</script>
<style>
.largeMargintop {
  margin-top: 3rem;
}
</style>
