<template>
  <div class="container-fluid">
    <button
      type="button"
      class="price-sort dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Categories
    </button>
    <ul class="dropdown-menu">
      <li>
        <a @click="DefaultFilter('')" class="dropdown-item" href="#">Default</a>
      </li>
      <li>
        <a @click="FilterMerchBy('Poster')" class="dropdown-item" href="#">Posters</a>
      </li>
      <li>
        <a @click="FilterMerchBy('Figurines')" class="dropdown-item" href="#"
          >Figurines</a
        >
      </li>
      <li>
        <a @click="FilterMerchBy('Clothing')" class="dropdown-item" href="#">Clothing</a>
      </li>
      <li><a @click="FilterMerchBy('Manga')" class="dropdown-item" href="#">Manga</a></li>
    </ul>
    <div class="merch-items" v-if="merchs">
      <div
        class="card"
        v-for="merch in FilterMerch"
        style="width: 18rem"
        :key="merch.merchID"
      >
        <img :src="merch.merchImg" class="card-img-top" alt="merchImg" loading="lazy" />
        <div class="card-body">
          <h5 class="card-title">{{ merch.merchName }}</h5>
          <p class="card-text">{{ merch.tag }}</p>
          <p class="card-text">R {{ merch.price }}</p>
          <button @click="addToCart(merch)" class="cart">Add to Cart</button>
          <router-link
            :to="{
              name: 'single',
              params: { id: merch.merchID },
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
    <div v-else>
      <loadingComp />
    </div>
  </div>
</template>

<script>
import loadingComp from "./loadingComp.vue";
export default {
  components: { loadingComp },
  data() {
    return {
      merch: [],
      cart: [],
      tagFilter: null,
    };
  },
  methods: {
    addToCart(merch) {
      this.cart.push(merch);
      console.log(this.cart);
    },
      FilterMerchBy(tag) {
        this.tagFilter = tag;
      },
      DefaultFilter() {
        this.tagFilter = ""
      }
  },
  computed: {
    FilterMerch() {
      if (!this.tagFilter) {
        return this.merchs;
      }
      return this.merchs.filter((fitermerch) => fitermerch.tag.includes(this.tagFilter));
    },
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
