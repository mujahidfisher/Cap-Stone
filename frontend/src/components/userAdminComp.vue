<template>
  <div>
    <div class="container-fluid">
      <h4>Users:</h4>
      <button>Add Admin User</button>
      <div class="table-responsive-xxl">
        <table class="table table-striped table-responsive-xxl">
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
                <button>Edit</button>
                <button @click="confirmDeleteU(user.userID)">Delete</button>
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
  methods: {
    confirmDeleteU(userID) {
      if (confirm("please confirm")) {
        try {
          this.$store.dispatch("deleteUser", userID);
        } catch (e) {
          console.log("Error deleting user!");
        }
      }
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
