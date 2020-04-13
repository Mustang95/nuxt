import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

export const strict = false;

export const state = () => ({
  counter: 0,
  lists: [],
  curatedLists: [],
  displaySearchList: false,
  newListForm: false,
  openListValue: false
});
export const getters = {
  LISTS: state => {
    return state.lists;
  },
  CURATED_LISTS: (state, getters, rootState) => {
      return state.curatedLists;
  },
  NEW_LIST_FORM: state => {
    return state.newListForm;
  },
  DISPLAY_SEARCH_LIST: state => {
    return state.displaySearchList;
  },
  DISPLAY_ADD_TASK: state => {
    return state.openListValue;
  },
  TASKS: state => index => {
    debugger
    if (index) {
      return state.lists.find(list => list.id === index).curatedTasks;
    }
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  addTodo(state, data) {
    state.lists = [...state.lists, data];
  },
  getList(state, data){
debugger
  },
  addTask(state, data) {
    state.curatedLists.push(data)
  },

  SET_NOTIFICATION: (state, { display, text, alertClass }) => {
    state.notification.display = display;
    state.notification.text = text;
    state.notification.class = alertClass;
  },
  SET_DISPLAY_SEARCH_LIST: (state, payload) => {
    state.displaySearchList = payload;
  },
  SET_NEW_LIST_FORM: (state, payload) => {
    state.newListForm = payload;
  },
  SET_DISPLAY_ADD_TASK: (state, payload) => {
    state.openListValue = payload;
  },
};

export const actions = {
  addTodo: ({ commit }, data) => {
    commit("addTodo", data);
  },
  addTask: ({ commit }, data) => {
    debugger
    commit("addTask", data);
  },
  getList: ({ commit }, data) => {
    commit("getList", data);
  },
  fetchPosts ({ commit }) {
    return client
      .fetchPosts()
      .then(posts => commit('setPosts', posts))
  },
  POST_TASK: async ({ commit }, { listId, taskTitle }) => {
    let { data } = await axios.post(`/lists/${listId}/tasks`, {
      title: taskTitle
    });
    commit("ADD_TASK", {
      data,
      listId
    });
  },
};
