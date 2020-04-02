<template>
  <v-navigation-drawer
    permanent
    style="width: 100%; overflow : hidden"
    pr-0
    pt-0
    pl-0
    pb-0
  >
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Titulo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Criar nova lista</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>
            <v-icon>add</v-icon>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list style="height: calc(100% - 130px); overflow-y: scroll">
      <v-list-item v-for="(list, key) in lists" v-bind:key="key">
        <v-list-item-content>
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>{{ list.task }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "lists",
  data: () => ({
    lists: [
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 0,
        title: "AB",
        task: "12"
      },
      {
        id: 1,
        title: "A",
        task: "18"
      },
      {
        id: 2,
        title: "A",
        task: "20"
      }
    ]
  })
};
</script>

<style></style>
