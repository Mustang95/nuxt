import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

export const strict = false;

export const state = () => ({
  counter: 0,
  displaySearchList: false,
  newListForm: false,
  openListValue: false
});
export const getters = {
  NEW_LIST_FORM: state => {
    return state.newListForm;
  },
  DISPLAY_SEARCH_LIST: state => {
    return state.displaySearchList;
  },
  DISPLAY_ADD_TASK: state => {
    return state.openListValue;
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
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
};
