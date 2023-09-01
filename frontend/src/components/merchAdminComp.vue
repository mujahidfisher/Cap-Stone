<template>
  <div>
    <div class="container-fluid">
        <h4>Merchandise:</h4>
        <table class="table table-striped">
          <button>Add Item</button>
        <thead>
          <tr>
            <th scope="col">Merch ID</th>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Tag</th>
            <th scope="col">Image</th>
            <th scope="col">Edit or Delete</th>
          </tr>
        </thead>
        <tbody v-for="merchs in merchs" :key="merchs.merchID">
          <tr>
            <td>{{ merchs.merchID }}</td>
            <td>{{ merchs.merchName }}</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td><button>Edit</button> <button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    merchs() {
      return this.$store.state.merchs
    }
  },
  mounted() {
    this.$store.dispatch("fetchMerchs")
  }
};
</script>

<style scoped></style>
