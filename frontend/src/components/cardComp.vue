<template>
  <div class="container-fluid">
    <div class="card" v-for="merch in merchs" style="width: 18rem" :key="merch.merchID">
      <img :src="merch.merchImg" class="card-img-top" alt="merchImg" />
      <div class="card-body">
        <h5 class="card-title">{{ merch.merchName }}</h5>
        <p class="card-text">{{ merch.tag }}</p>
        <p class="card-text">R {{ merch.price }}</p>
        <button  @click="addToCart(merch)" class="btn btn-primary">Add to Cart</button>
        <router-link
        :to="{
          name: 'single',
          params: { id: merch.merchID},
          query: {
            name: merch.merchName,
            tag: merch.tag,
            img: merch.merchImg,
            price: merch.price,
          },
        }"

        ><button class="view">View Item</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      merch: [],
      cart: [],
    }
  },
  methods: {
    addToCart(merch) {
      this.cart.push(merch)
      console.log(this.cart);
    }
  },
  computed: {
    merchs() {
      return this.$store.state.merchs;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMerchs")
  },
};
</script>

<style scoped></style>
