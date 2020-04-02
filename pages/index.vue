<template>
<v-container>
    <navbar></navbar>
    <Todo></Todo>
</v-container>
</template>
<script>
import Login from "~/components/Auth/Login.vue";
import Signup from "~/components/Auth/Signup.vue";
import Todo from "~/components/Todo.vue";
import Lists from "~/components/Lists.vue";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import navbar from "~/components/navbar.vue";

export default {
  components: {
    Login,
    Signup,
    Todo,
    Lists,
    Logo,
    VuetifyLogo,
    navbar
  },
  data: () => ({
    name: "",
    description: "",
    tasks: []
  }),
  methods: {
    onSubmit() {
      let productTask = {
        name: this.name,
        description: this.description
      };
      this.addTask(productTask);
      //productTask.name = null;
      //productTask.description = null;
    },
    addTask(productTask) {
      this.tasks.push(productTask);
    },
    onRemove(index) {
      this.tasks.splice(index, 1);
    },
    onDone() {
      //this.taskscampleted.push(productTask);
    }
  }
};
</script>
<style></style>
