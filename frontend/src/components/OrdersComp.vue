<template>
    <div>
        <div class="container-fluid">
          <h4 class="merch-title">orders:</h4>
    
          <div class="table-responsive-xxl">
            <table class="table table-striped table-dark table-bordered border-warning">
              <thead>
                <tr>
                  <th scope="col">Orders ID</th>
                  <th scope="col">Merch ID</th>
                  <th scope="col">User ID</th>
                  <th scope="col">order Date</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody v-for="merch in merchs" :key="merch.merchID">
                <tr>
                  <td>#</td>
                  <td>#</td>
                  <td>#</td>
                  <td>MM/DD/YYYY</td>
                  <td>
                    <button class="deleter">
                      Delete
                    </button>
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
      created() {
        const saveUser = localStorage.getItem("user")
        if (saveUser) {
            this.user = JSON.parse(saveUser)
        }
        const data = JSON.parse(localStorage.getItem("user"))
        if (data) {
            this.$store.commit("setUser", data)
        }
    },
        
    }
</script>

<style scoped>

</style>