<template>
  <div>
    <div class="singleUpage">
      <h1 class="profile">Profile</h1>
      <div class="userDetails">
        <h2 class="singleTitle">{{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h2>
        <img class="my-pic" :src="$store.state.user?.userProfile" alt="" />
        <h3 class="singleTitle">{{ $store.state.user?.emailAdd }}</h3>
        <router-link to="/editU/:id"><button class="btn btn-outline-warning">Edit</button></router-link>
        <button @click="logOut" class="logout-btn">Log Out</button>
        <router-link class="btn btn-outline-warning" style="margin-top: 20px" to="/">Login</router-link>
        <router-link class="back-btn" to="/home">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        logOut() {
            this.$store.dispatch("Logout")
        }
    },
    created() {
        const saveUser = localStorage.getItem("user")
        if (saveUser) {
            this.user = JSON.parse(saveUser)
        }
        const data = JSON.parse(localStorage.getItem("user"))
        if (data) {
            this.$store.commit("setUser", data)
        }
    }
};
</script>

<style scoped>
</style>
