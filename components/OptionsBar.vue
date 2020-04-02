<template>
  <div>
    <v-card height="100%">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>Opções</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="(item, key) in items"
          v-bind:key="key"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="(subItem, key) in item.items"
            v-bind:key="key"
            v-on="
              item.action === 'sort'
                ? { click: () => sort(subItem.by) }
                : { click: () => filter(subItem.by) }
            "
            active-class
          >
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!--  -->
        <v-list-group prepend-icon="filter" no-action>
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>List options</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="removeList()">
            <v-list-item-content>
              <v-list-item-title class="danger">Remove list</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click.prevent="openDrawer()">
            <v-list-item-content>
              <v-list-item-title class="danger"
                >Change background</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <!-- <MoreOptions /> -->
  </div>
</template>

<script>
//import Settings from "~/components/Settings.vue";
export default {
  name: "optionsBar",
  components: {
 //   Settings
  },
  data: () => ({
    items: [
      {
        action: "sort",
        title: "Ordenado por",
        active: true,
        items: [
          {
            title: "Data",
            by: "data"
          },
          {
            title: "Nome",
            by: "nome"
          }
        ]
      },
      {
        action: "filter_list",
        title: "Filtrado por",
        active: false,
        items: [
          {
            title: "Incompleto",
            by: "incompleto"
          },
          {
            title: "Completo",
            by: "completo"
          },
          {
            title: "Todos",
            by: "todos"
          }
        ]
      }
    ]
  }),
  methods: {
    sort(value) {},
    filter(value) {},
    openDrawer() {},
    removeList() {}
  }
};
</script>

<style></style>
