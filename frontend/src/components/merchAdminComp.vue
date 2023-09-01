<template>
  <div>
    <div class="container-fluid">
      <h4>Merchandise:</h4>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#merchmodal"
      >
        Add Merch
      </button>

      <div
        class="modal fade"
        id="merchmodal"
        tabindex="-1"
        aria-labelledby="merchmodalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="merchmodalLabel">Add Merchandise</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="ConfimMerchAdd">
                <input
                  v-model="merchAdd.merchName"
                  type="text"
                  placeholder="Merch Name"
                />
                <input v-model="merchAdd.quantity" type="number" placeholder="Quantity" />
                <input v-model="merchAdd.tag" type="text" placeholder="Tag" />
                <input v-model="merchAdd.merchImg" type="text" placeholder="Image URL" />
                <input v-model="merchAdd.price" type="number" placeholder="Price" />
                <button type="submit">Add</button>
              </form>
            </div>
            <div class="modal-footer">
              <button @click="reloader" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

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
              <td><img class="adminImg" :src="merch.merchImg" alt="img" /></td>
              <td>{{ merch.tag }}</td>
              <td>{{ merch.price }}</td>
              <td>
                <button>Edit</button>
                <button @click="confirmDeleteM(merch.merchID)">Delete</button>
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
      merchAdd: {
        merchName: "",
        quantity: "",
        tag: "",
        merchImg: "",
        price: "",
      },
    };
  },
  methods: {
    ConfimMerchAdd() {
      this.$store.dispatch("ConfirmAddMerch", this.merchAdd);
    },
    confirmDeleteM(merchID) {
      if (confirm("Please confirm.")) {
        try {
          this.$store.dispatch("deleteMerch", merchID);
        } catch (e) {
          console.log("Error deleting item!");
        }
      }
    },
    reloader() {
      location.reload()
    }
  },
  computed: {
    merchs() {
      return this.$store.state.merchs;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMerchs");
  },
};
</script>

<style scoped></style>
