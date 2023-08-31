import { createStore } from "vuex";
import axios from "axios";
const Api = "https://cap-stone-api.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    merchs: null,
    merch: null,
    spinner: false,
    token: null,
    msg: null,
    postData: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setMerchs(state, merchs) {
      state.merchs = merchs;
    },
    setmerch(state, merch) {
      state.merch = merch;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setPostData(state, data) {
      state.postData = data;
    },
    SortName(state) {
      state.merchs.sort((a, b) => a.merchName.localeCompare(b.merchName));
    },
    SortPrice(state) {
      state.merchs.sort((a, b) => a.price - b.price);
    },
  },
  actions: {
    async fetchMerchs(context) {
      try {
        const { data } = await axios.get(`${Api}merch`);
        context.commit("setMerchs", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😢");
      }
    },
  },
  modules: {},
});
