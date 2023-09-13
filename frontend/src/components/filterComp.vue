<template>
  <div>
    <div class="btn-group">
      <div class="sort">
        <button @click="Default" class="price-sort">Default</button>
        <div class="btn-group"></div>
        <button @click="SortName" class="price-sort">sort by name</button>
        <button @click="SortPrice" class="price-sort">sort by price</button>
      </div>
      <div class="cartview">
        <router-link to="/checkout">
          <button class="price-sort">
            View Cart<img
              class="cartImg"
              src="https://i.postimg.cc/bJSp61n3/download-removebg-preview-5.png"
              alt="cart"
            />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Default() {
      this.$store.dispatch("fetchMerchs");
    },
    SortName() {
      this.$store.dispatch("FilterName");
    },
    SortPrice() {
      this.$store.dispatch("FilterPrice");
    },
  },
};
</script>

<style scoped></style>
