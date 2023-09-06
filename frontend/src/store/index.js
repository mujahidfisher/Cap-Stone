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
    setMerch(state, merch) {
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
        const { data } = await axios.get(`${Api}merchs`);
        context.commit("setMerchs", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😢");
      }
    },
    async deleteMerch(context, merchID) {
      try {
        const { data } = await axios.delete(`${Api}merch/${merchID}`);
        if (data.msg) {
          context.dispatch("fetchMerchs");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${Api}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${Api}user/${userID}`);
        if (data.msg) {
          context.dispatch("fetchUsers");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async ConfirmAddMerch( { commit }, merchAdd) {
      try {
        const res = await axios.post(`${Api}registerM`, merchAdd)
        commit("setPostData", res.data)
        console.log(res.data);
      }catch(e) {
        console.log("nothing much");
      }
    },
    async ConfirmAddUser( { commit }, userAdd) {
      try {
        const res = await axios.post(`${Api}registerU`, userAdd)
        commit("setPostData", res.data)
        console.log(res.data);
      }catch(e) {
        console.log("nothing much");
      }
    },
    async ConfirmEditMerch(context, edmerch) {
      try {
        const res = await axios.patch(`${Api}merch/${edmerch.merchID}`, edmerch);
        context.commit("setPostData", res.data)
        console.log(res.data);
      }catch(e) {
        console.log(err);
      }
    },
    async ConfirmEditUser(context, eduser) {
      try {
        const res = await axios.patch(`${Api}user/${eduser.userID}`, eduser);
        context.commit("setPostData", res.data)
        console.log(res.data);
      }catch(e) {
        console.log(err);
      }
    }
  },
  modules: {},
});
