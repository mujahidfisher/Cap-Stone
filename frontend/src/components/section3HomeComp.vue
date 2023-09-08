<template>
  <div>
    <div class="wrapper">
      <h2 class="feat-header-top">Featured</h2>
      <h2 class="feat-header-bottom" aria-hidden="true">Featured</h2>
    </div>
    <p class="feat-text">
      We're thrilled to offer an eclectic treasure trove of merchandise, spanning a
      kaleidoscope of beloved anime series that truly ignite our <br />
      passions and immerse us in the enchanting worlds we adore.
    </p>
    <div class="container-fluid">
      <div class="ftprod">

        <div
        class="card"
        v-for="merch in limitedProducts"
        style="width: 18rem"
        :key="merch.merchID"
      >
        <img :src="merch.merchImg" class="card-img-top img-fluid" alt="merchImg" loading="lazy"/>
        <div class="card-body text-center">
          <h5 class="card-header">{{ merch.merchName }}</h5>
          <p class="card-header">{{ merch.tag }}</p>
          <p class="card-header">R {{ merch.price }}</p>
          <router-link class="card-header"
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
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    merchs() {
      return this.$store.state.merchs;
    },
    limitedProducts() {
      return this.merchs?.slice(0, 4);
    },
  },
  mounted() {
    this.$store.dispatch("fetchMerchs");
  },
};
</script>

<style scoped></style>
