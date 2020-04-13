<template>
  <v-container pt-0 pr-0 pb-0 pl-0 style="width: 100%; overflow : hidden">
    <v-form ref="form" @submit.prevent="sendData()" @keyup.enter="sendData">
      <v-text-field
        pb-0
        @blur="closeForm()"
        append-icon="add"
        solo
        filled
        clearable
        dense
        ref="input"
        v-model="title"
        placeholder="Title"
        :rules="[rules.required]"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: "",
    rules: {
      required: value => !!value || "Required"
    }
  }),
  methods: {
    sendData() {
      if (!this.title) {
        return;
      }
      this.addTodo({ title: this.title, id: this.$store.state.counter}); //, id: this.$route.params.id 
      this.$store.commit("increment");
      this.title = "";
    },
    ...mapActions(["addTodo"]),
    closeForm() {
      this.$store.commit("SET_NEW_LIST_FORM", false);
    }
  },
  mounted() {
    this.$refs.input.focus();
  }
};
</script>

<style></style>
