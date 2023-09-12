<template>
  <div>
    <div class="table-responsive-xxl">
      <h4 class="txt-head">Your Listing:</h4>
      <button @click="RemoveCart" class="clear-btn">Clear</button>
      <table class="table table-striped table-dark table-bordered border-warning">
        <div class="clear-position"></div>
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Tag</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Remove or Purchase</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.merchID">
            <td>{{ item.merchName }}</td>
            <td>{{ item.tag }}</td>
            <td><img class="adminImg" :src="item.merchImg" alt="img" /></td>
            <td>R{{ item.price }}</td>
            <td>
              <button @click="deleteSingle(index)" class="deleter">Remove</button>
              <button class="editer">Purchase</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart;
    },
    RemoveCart() {
      localStorage.removeItem("cart");
      location.reload();
    },
    deleteSingle(index) {
      JSON.parse(localStorage.getItem("cart"));
      this.cart.splice(index, 1);
      JSON.stringify(localStorage.setItem(this.cart));
    },
  },
};
</script>

<style scoped></style>
