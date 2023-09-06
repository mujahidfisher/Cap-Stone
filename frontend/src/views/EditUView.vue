<template>
  <div class="editingpage">
    <h2 class="editHeader">Edit User</h2>
    <a class="backbutton" href="/admin">Back</a>
    <form class="formedit"  @submit.prevent="EditUser">
        <input class="model-input" v-model="eduser.firstName" type="text" placeholder="Firstname" />
        <input class="model-input" v-model="eduser.lastName" type="text" placeholder="Lastname" />
        <input class="model-input" v-model="eduser.userAge" type="number" placeholder="Age" />
        <input class="model-input" v-model="eduser.userRole" type="text" placeholder="Specify Admin" />
        <input class="model-input" v-model="eduser.emailAdd" type="text" placeholder="Email" />
        <input class="model-input" v-model="eduser.userPass" type="text" placeholder="Password" />
        <input class="model-input" v-model="eduser.userProfile" type="text" placeholder="Profile Image" />
      <button class="explore-btn" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      eduser: {
        userID: this.id,
        firstName: "",
        lastName: "",
        userAge: 0,
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditUser() {
      this.$store.dispatch("ConfirmEditUser", this.eduser)
    }
  }
};
</script>

<style scoped></style>
