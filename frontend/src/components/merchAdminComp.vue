<template>
  <div>
    <div class="container-fluid">
        <h4>Merchandise:</h4>
        <button>Add Item</button>
        <div class="table-responsive-xxl">
        <table class="table table-striped">
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
        <tbody v-for="merch in merchs" :key="merch.merchID">
          <tr>
            <td>{{ merch.merchID }}</td>
            <td>{{ merch.merchName }}</td>
            <td>{{ merch.quantity }}</td>
            <td><img class="adminImg" :src="merch.merchImg" alt="img"></td>
            <td>{{ merch.tag }}</td>
            <td>{{ merch.price }}</td>
            <td><button>Edit</button> <button @click="confirmDeleteM(merch.merchID)">Delete</button></td>
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
    confirmDeleteM(merchID) {
      if(confirm("Please confirm.")) {
        try {
          this.$store.dispatch("deleteMerch", merchID)
        }catch(e) {
          console.log("Error deleting item!");
        }
      }
    }
  },  
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
