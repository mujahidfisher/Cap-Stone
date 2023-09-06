<template>
  <div>
    <div class="container-fluid">
      <h4 class="merch-title">Merchandise:</h4>
      <button
        type="button"
        class="AddMerch"
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
              <h1 class="modal-title fs-5 modal-title" id="merchmodalLabel">
                Add Merchandise
              </h1>
            </div>
            <div class="modal-body">
              <form @submit.prevent="ConfimMerchAdd">
                <input
                  class="model-input"
                  v-model="merchAdd.merchName"
                  type="text"
                  placeholder="Merch Name"
                />
                <input
                  class="model-input"
                  v-model="merchAdd.quantity"
                  type="number"
                  placeholder="Quantity"
                />
                <input
                  class="model-input"
                  v-model="merchAdd.tag"
                  type="text"
                  placeholder="Tag"
                />
                <input
                  class="model-input"
                  v-model="merchAdd.merchImg"
                  type="text"
                  placeholder="Image URL"
                />
                <input
                  class="model-input"
                  v-model="merchAdd.price"
                  type="number"
                  placeholder="Price"
                />
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
              <th scope="col">Merch ID</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
              <th scope="col">Tag</th>
              <th scope="col">Price</th>
              <th scope="col">Edit or Delete</th>
            </tr>
          </thead>
          <tbody v-for="merch in merchs" :key="merch.merchID">
            <tr>
              <td>#{{ merch.merchID }}</td>
              <td>{{ merch.merchName }}</td>
              <td>{{ merch.quantity }}</td>
              <td>
                <img class="adminImg" :src="merch.merchImg" alt="img" loading="lazy" />
              </td>
              <td>{{ merch.tag }}</td>
              <td>R{{ merch.price }}</td>
              <td>
                <router-link :to="{ name: 'editM', params: { id: merch.merchID } }"><button class="editer">Edit</button></router-link>
                <button class="deleter" @click="confirmDeleteM(merch.merchID)">Delete</button>
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
      location.reload();
    },
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
