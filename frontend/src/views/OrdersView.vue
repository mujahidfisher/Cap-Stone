<template>
  <div>
    <div class="container-fluid">
      <router-link to="/singleU"><button class="deleter">back</button></router-link>
      <h4 class="merch-title">orders:</h4>
      <div class="merch-items">
        <div
          class="card"
          v-for="(item, index) in cart"
          style="width: 18rem"
          :key="item.merchID"
        >
          <img :src="item.merchImg" class="card-img-top" alt="merchImg" loading="lazy" />
          <div class="card-body">
            <h5 class="card-title">{{ item.merchName }}</h5>
            <p class="card-text">{{ item.tag }}</p>
            <p class="card-text">R {{ item.price }}</p>
            <p class="card-text">5-7 working days</p>
            <button class="btn btn-warning disabled">Purchased</button>
            <button @click="deleteSingle(index)" class="deleter">Cancel</button>
          </div>
        </div>
      </div>
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
  },
  methods: {
    deleteSingle(index) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.cart = cart;
      }
      location.reload()
    },
  },
};
</script>

<style scoped></style>
