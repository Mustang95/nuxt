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
      <v-toolbar-title v-if="!DISPLAY_SEARCH_LIST">Titulo</v-toolbar-title>
      <SearchBar v-if="DISPLAY_SEARCH_LIST" />
      <v-spacer></v-spacer>
      <v-btn icon @click.prevent="toggleSearchList()">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item
        color="blue"
        @click.prevent="openNewListForm()"
        v-if="!isOpen"
      >
        <v-list-item-content>
          <v-list-item-title>Criar nova lista</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>
            <v-icon>add</v-icon>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="openNewListFormValue"> 
        <NewList />
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list style="height: calc(100% - 130px); overflow-y: scroll">
      <v-list-item-group>

      <v-list-item
      :to="{ name: 'tasks', params: { id: list.id} }"
        v-for="list of lists"
        v-bind:key="list.id">
        <v-list-item-content >
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>{{ list.id }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from "./SearchBar";
import NewList from "./NewList";
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "lists",
  components: { SearchBar, NewList },
  data () {
    return {
      lists: []
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/lists');
      this.lists = res.data;
    }catch(e){
      console.error(e);
    }
  },
  computed: {
    ...mapGetters(["DISPLAY_SEARCH_LIST", 'CURATED_LISTS', 'DISPLAY_ADD_TASK']),
    openNewListFormValue: {
      get() {
        return this.$store.getters.NEW_LIST_FORM;
      },
      set(value) {
        this.$store.commit("SET_NEW_LIST_FORM", value);
      }
    },
    isOpen() {
      return this.$store.getters.NEW_LIST_FORM;
    }
  },
  methods: {
    toggleSearchList() {
      this.$store.commit("SET_DISPLAY_SEARCH_LIST", !this.DISPLAY_SEARCH_LIST);
    },
    openNewListForm() {
      this.$store.commit("SET_NEW_LIST_FORM", true);
    },
    openList(data){
      debugger
      this.$store.commit("SET_DISPLAY_ADD_TASK", true);
      var count = this.$store.state.lists.length;
      for(var i = 0; i < count; i++){
        if(data.id == this.$store.state.lists[i].id){
          
          //var a = Object.assign(this.$store.state.lists[i], data);
          //this.$store.state.lists[i] = a;
          //debugger
        }
      }
    },
    ...mapActions(["getList"]),
  }
};
</script>

<style></style>
