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
              <button @click="order" class="editer">Purchase</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="priceTot">
      <h4 class="total">Total Amount:</h4>
      <h6 class="amount">R{{ totalAmount }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart;
    },
    RemoveCart() {
      localStorage.removeItem("cart");
      location.reload();
    },
    order() {
      sweetAlert("Order has been placed! Your order with arrive in 5-7 working days!");
    },
    totalAmount() {
      let total = 0;
      if (this.cart && this.cart.length > 0) {
        for (const item of this.cart) {
          total += item.price;
        }
      }
      return total;
    },
  },
  methods: {
    deleteSingle(index) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.cart = cart;
      }
      location.reload();
    },
  },
};
</script>

<style scoped></style>
