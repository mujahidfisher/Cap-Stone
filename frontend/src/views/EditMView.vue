<template>
    <div class="editingpage">
      <h2 class="editHeader">Edit Item</h2>
      <a class="backbutton" href="/admin">Back</a>
      <form class="formedit" @submit.prevent="EditMerch">
        <input
          class="model-input"
          v-model="edmerch.merchName"
          type="text"
          placeholder="Merch Name"
        />
        <input
          class="model-input"
          v-model="edmerch.quantity"
          type="number"
          placeholder="Quantity"
        />
        <input class="model-input" v-model="edmerch.tag" type="text" placeholder="Tag" />
        <input
          class="model-input"
          v-model="edmerch.merchImg"
          type="text"
          placeholder="Image URL"
        />
        <input
          class="model-input"
          v-model="edmerch.price"
          type="number"
          placeholder="Price"
        />
        <button class="explore-btn" type="submit">Save</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      edmerch: {
        merchID: this.id,
        merchName: "",
        quantity: 0,
        tag: "",
        merchImg: "",
        price: 0,
      },
    };
  },
  props: ["id"],
  methods: {
    EditMerch() {
      this.$store.dispatch("ConfirmEditMerch", this.edmerch)
    }
  }
};
</script>

<style scoped></style>
