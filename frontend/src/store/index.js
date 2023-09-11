import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
import authUser from "@/services/AuthenticateUser";
const Api = "https://cap-stone-api.onrender.com/";
const { cookies } = useCookies();

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
  getters: {
  },
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
    async ConfirmAddMerch({ commit }, merchAdd) {
      try {
        const res = await axios.post(`${Api}registerM`, merchAdd);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log("nothing much");
      }
    },
    async ConfirmAddUser({ commit }, userAdd) {
      try {
        const res = await axios.post(`${Api}registerU`, userAdd);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log("nothing much");
      }
    },
    async ConfirmEditMerch(context, edmerch) {
      try {
        const res = await axios.patch(
          `${Api}merch/${edmerch.merchID}`,
          edmerch
        );
        context.commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log(err);
      }
    },
    async ConfirmEditUser(context, eduser) {
      try {
        const res = await axios.patch(`${Api}user/${eduser.userID}`, eduser);
        context.commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log(err);
      }
    },
    async Register(context, payload) {
      try {
        const { msg } = (await axios.post(`${Api}registerU`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "logIn" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async LoginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${Api}login`, payload)
        ).data;
        if (result) {
          context.commit(`setUsers`, { result, msg });
          cookies.set("LegitUser", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: `Welcome back ${result?.firstName} ${result?.lastName}`,
            text: msg,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async FilterName(context) {
      try {
        const { data } = await axios.get(`${Api}merchs`);
        context.commit("SortName", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async FilterPrice(context) {
      try {
        const { data } = await axios.get(`${Api}merchs`);
        context.commit("SortPrice", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    // async FilterDefault(context {

    // })
  },
  modules: {},
});
