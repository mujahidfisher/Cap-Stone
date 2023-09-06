<template>
  <div>
    <div class="container-fluid">
      <h4 class="merch-title">Users:</h4>

      <button
        type="button"
        class="AddMerch"
        data-bs-toggle="modal"
        data-bs-target="#usermodal"
      >
        Add Admin User
      </button>

      <div
        class="modal fade"
        id="usermodal"
        tabindex="-1"
        aria-labelledby="usermodalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 modal-title" id="usermodalLabel">
                Add User
              </h1>
            </div>
            <div class="modal-body">
              <form @submit.prevent="ConfimUserAdd">
                <input class="model-input" v-model="userAdd.firstName" type="text" placeholder="Firstname" />
                <input class="model-input" v-model="userAdd.lastName" type="text" placeholder="Lastname" />
                <input class="model-input" v-model="userAdd.userAge" type="number" placeholder="Age" />
                <input class="model-input" v-model="userAdd.userRole" type="text" placeholder="Specify Admin" />
                <input class="model-input" v-model="userAdd.emailAdd" type="text" placeholder="Email" />
                <input class="model-input" v-model="userAdd.userPass" type="text" placeholder="Password" />
                <input class="model-input" v-model="userAdd.userProfile" type="text" placeholder="Profile Image" />
                <button class="Add-btn" type="submit">Add</button>
                <button
                  @click="reloader"
                  type="button"
                  class="Back-btn"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive-xxl">
        <table class="table table-striped table-dark table-bordered border-warning">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Surname</th>
              <th scope="col">Age</th>
              <th scope="col">Role</th>
              <th scope="col">Email Address</th>
              <th scope="col">Profile Image</th>
              <th scope="col">Edit or Delete</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.userID">
            <tr>
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td><img class="adminImg" :src="user.userProfile" alt="profilepic" /></td>
              <td>
                <router-link :to="{ name: 'editU', params: { id: user.userID } }"><button class="editer">Edit</button></router-link>
                <button class="deleter" @click="confirmDeleteU(user.userID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAdd: {
        firstName: "",
        lastName: "",
        userAge: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
    };
  },
  methods: {
    ConfimUserAdd() {
      this.$store.dispatch("ConfirmAddUser", this.userAdd);
    },
    confirmDeleteU(userID) {
      if (confirm("please confirm")) {
        try {
          this.$store.dispatch("deleteUser", userID);
        } catch (e) {
          console.log("Error deleting user!");
        }
      }
    },
    reloader() {
      location.reload();
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped></style>
