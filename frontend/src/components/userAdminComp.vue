<template>
    <div>
        <div class="container-fluid">
            <h4>Users:</h4>
            <table class="table table-striped">
              <button>Add Admin User</button>
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
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td><button>Edit</button> <button>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>