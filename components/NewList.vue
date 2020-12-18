<template>
  <v-container px-0 py-0 style="width: 100%; overflow : hidden">
    <v-form
      ref="form"
      @submit.prevent="addTodoList()"
      @keyup.enter="addTodoList"
    >
      <v-text-field
        pb-0
        @blur="closeForm()"
        append-icon="add"
        solo
        filled
        clearable
        dense
        ref="input"
        v-model="list.listTitle"
        placeholder="Title"
        :rules="[rules.required]"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
const baseURL = "http://localhost:3000/lists";
export default {
  data: () => ({
    list: { listTitle: "", tasks: {} },
    rules: {
      required: value => !!value || "Required"
    }
  }),
  methods: {
    async addTodoList() {
      const ctrl = this;
      return new Promise((resolve, reject) => {
        axios
          .post(baseURL, { title: this.list.listTitle })
          .then(({ data }) => {
            ctrl.list = {};
            ctrl.list[Symbol.iterator] = function*() {
              data;
            };
            ctrl.listTitle = "";
            this.$router.push({
              name: "tasks",
              params: {
                id: data.id
              }
            });
            ctrl.$store.commit("SET_NEW_LIST_FORM", false);
            resolve(data);
          })
          .catch(error => {
            debugger;
            ctrl.listTitle = "";
            reject(error);
          });
      });
    },
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
